module.exports = {
  siteMetadata: {
    title: "Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name:`blog`,
        path:`${__dirname}/blog`,
      }
    },
  ],
}
