import React, { useEffect, useState } from 'react';

import './styles.scss';

const baseUrl = 'https://api.netlify.com/api/v1/forms/5f2e0c796ff2e70008ec089b/submissions?access_token=';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const Inbox = () => {
  const windowGlobal = typeof window !== 'undefined' && window;
  const [emails, setEmails] = useState([]);
  const [input, setInput] = useState(() => {
    if (windowGlobal) return windowGlobal.localStorage.getItem('key') || '';
    return '';
  });
  const [error, setError] = useState(false);

  async function setData() {
    try {
      const data = await fetchData(baseUrl + input);
      setError(false);
      setEmails(data);
    } catch (err) {
      setEmails([]);
      setError(true);
      console.log('Caught error:', err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData();
  }

  function handleInputChange({ target }) {
    setInput(target.value);
  }

  // Future update
  function handleDelete({ target }) {
    fetch(`https://api.netlify.com/api/v1/submissions/${target.id}?access_token=${input}`, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => console.log('Delete caught error: ', err));
  }

  useEffect(() => {
    window.localStorage.setItem('key', input);
  }, [input]);

  return (
    <div id="page-mails" className="container">
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Senha" value={input} onChange={handleInputChange} />
        <button type="submit">Acessar inbox</button>
      </form>

      { error && <p>Esse código é inválido</p> }

      {
        emails.length > 0 && (
        <>
          <h1>Emails recebidos:</h1>
          <ul className="mails">
            {
              emails.map((email) => {
                return (
                  <li key={email.id} className="mail">
                    <div className="sent-date">
                      <span>Data do envio: </span>
                      {
                        String(new Date(email.created_at).toLocaleDateString('pt-br'))
                      }
                    </div>
                    <div className="name">
                      <span>Nome: </span>
                      {email.data.name}
                    </div>
                    <div className="email">
                      <span>Email: </span>
                      <a href={`mailto:${email.data.email}`}>{email.data.email}</a>
                    </div>
                    <div className="subject">
                      <span>Assunto: #</span>
                      {email.data.subject}
                    </div>
                    <div className="message">
                      <span>Mensagem: </span>
                      {email.data.message}
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </>
        )
      }
    </div>
  );
};

export default Inbox;
