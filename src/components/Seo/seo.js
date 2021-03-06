import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        authorSite
        siteDescrption: description
        image
        siteUrl
        siteTitle: title
        titleTemplate
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, image, lang, meta, keywords, location }) => {
  const { site } = useStaticQuery(query)
  const descriptionSlice = description.slice(0, 149);
  const {
    siteDescrption,
    siteTitle,
    // author,
    // authorSite,
    // siteImage,
    siteUrl,
    // titleTemplate,
    twitterUsername,
  } = site.siteMetadata
  // const keywords = site.siteMetadata.keywords
  const metaDescription = descriptionSlice
  const defaultTitle = siteTitle
  const metaImage = image 
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: `keywords`,
        //   content: keywords,
        // },
        {
          name: `og:url`,
          content: `${siteUrl}${location}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: "Certisured",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image:width`,
          content: "1200",
        },
        {
          property: `og:image:height`,
          content: "630",
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        keywords.length > 0 ? {
          name: `keywords`,
          content: keywords.join(`, `),
        } : []
      ).concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
}


export default SEO
