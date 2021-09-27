module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Earth 2",
    description:"It's like earth, but with a 2 at the end."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
  
}
;
