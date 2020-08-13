/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.atelieterapia.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/inbox', '/success'],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-br',
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.js'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Merriweather',
            variants: ['400', '700'],
          },
        ],
      },
    },
  ],
};
