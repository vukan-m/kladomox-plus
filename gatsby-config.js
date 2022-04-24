module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Kladomox Plus",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      option: {
        defaults: {},
        failOnError: true,
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-transformer-sharp",
    "react-fullscreen-image",
  ],
};
