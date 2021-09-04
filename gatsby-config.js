require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Inicio", to: "/" },
      { name: "Quiénes Somos", to: "/quienes_somos" },
    ],
    links: {
      facebook: "https://www.facebook.com/Porque-TQM-108369101582290",
      instagram: "https://www.instagram.com/porquetqm/",
      // pinterest: "https://pinterest.com/",
      // twitter: "https://twitter.com/",
    },
    locale: "en",
    title: `Porque TQM`,
    description: `Pagina oficial de Porque TQM: Tienda de regalos, sorpresas Y mucho mas!`,
    author: `Laura Madrid`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
//     {
//       resolve: "gatsby-plugin-mailchimp",
//       options: {
//         endpoint: process.env.MAILCHIMP_ENDPOINT,
//       },
//     },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Porque TQM`,
        short_name: `PorqueTQM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
