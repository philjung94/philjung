module.exports = {
  siteMetadata: {
    title: `@philjung94`,
    description: `Phil Jung's website.`,
    author: `@philjung94`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        include: /images/,
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: {
            removeViewBox: false, // remove viewBox when possible (default)
            cleanupIDs: true,    // remove unused IDs and minify remaining IDs (default)
          },
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
