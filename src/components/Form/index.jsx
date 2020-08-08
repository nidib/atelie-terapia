import React, { useState } from 'react';

import './styles.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [readyToSend, setReadyToSend] = useState(false);

  function handleNameChange({ target }) {
    setName(target.value);
  }

  function handleEmailChange({ target }) {
    setEmail(target.value);
  }

  function handleSubjectChange({ target }) {
    setSubject(target.value);
  }

  function handleMessageChange({ target }) {
    setMessage(target.value);
  }

  function checkField(field) {
    const fieldElmnt = field;
    if (!field.value) {
      fieldElmnt.className = 'red';
    } else {
      fieldElmnt.className = '';
    }
  }

  function checkFields() {
    if (name && email && subject && message) return true;
    return false;
  }

  function handleSubmit(e) {
    if (checkFields()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setReadyToSend(true);
      }, 3000);
    } else {
      e.preventDefault();
      setErrorMessage(true);
    }
  }

  function handleBlur({ target }) {
    checkField(target);
  }

  if (loading) return <p style={{ textAlign: 'center' }}>Enviando...</p>;
  if (readyToSend) {
    return (
      <p style={{ textAlign: 'center', lineHeight: '22px' }}>
        Obrigado!
        <br />
        Entraremos em contato o quanto antes!
      </p>
    );
  }

  return (
    <form method="POST" name="contact" className="container" onSubmit={handleSubmit} noValidate data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <legend>Nome:</legend>
        <label htmlFor="name">
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} onBlur={handleBlur} />
        </label>
      </fieldset>
      <fieldset>
        <legend>Email:</legend>
        <label htmlFor="email">
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} onBlur={handleBlur} />
        </label>
      </fieldset>
      <fieldset>
        <legend>Assunto:</legend>
        <select id="subject" name="subject" defaultValue="" onChange={handleSubjectChange} onBlur={handleBlur}>
          <option value="" disabled>Selecione um atendimento</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Mensagem:</legend>
        <label htmlFor="message">
          <textarea id="message" name="message" onChange={handleMessageChange} onBlur={handleBlur} />
        </label>
      </fieldset>
      {
        errorMessage && <p className="error-message">Preêncha todos os campos</p>
      }
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
