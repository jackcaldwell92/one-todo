module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
      },
      resolve: `gatsby-plugin-manifest`,
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    title: 'One Todo',
  },
};
