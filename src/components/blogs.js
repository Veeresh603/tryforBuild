// import React from "react"
// import styled from "styled-components"
// import Banner2 from "../components/Banner2"
// import banner from "../images/blog.jpg"
// import { graphql } from "gatsby"
// import SoftwareDevelopmentGrid from "../components/SoftwareDevelopmemtGrid copy"
// import BlogList from "../components/BlogComponent/BlogList"

// function blogs({ data }) {
//   const {
//     linkedin_link,
//     name,
//     title,
//     youtube_link,
//     Descrption,
//     blog_slug,
//     blog_cover_image,
//     blogger_pic,
//     shortDescrption,
//   } = data.allStrapiBlogs.nodes[0]
//   return (
//     <Container>
//       <Banner2
//         image={banner}
//         img={true}
//         title="blogs"
//         linktitle="back to home"
//       />
//       <SoftwareDevelopmentGrid
//         height={{ height: "auto" }}
//         title={title}
//         desc={shortDescrption}
//         img={blog_cover_image[0].url}
//         image={true}
//         link={blog_slug}
//         linktitle="Read More"
//         class={true}
//       />
//       <BlogList data={data.allStrapiBlogs.nodes} />
//     </Container>
//   )
// }

// export default blogs
// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   overflow: hidden;
//   height: auto;
//   align-items: flex-start;
//   flex-direction: column;
//   justify-content: flex-start;
//   flex-wrap: wrap;

//   > h1 {
//     margin-top: 50px;
//     border-bottom: 1px solid #ff002b;
//     @media (max-width: 479px) {
//       text-align: center;
//       font-size: 17px;
//     }
//   }

//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//     overflow: hidden;
//   }
// `

// export const query = graphql`
//   {
//     allStrapiBlogs {
//       nodes {
//         Descrption
//         blog_slug
//         blog_cover_image {
//           url
//         }
//         blogger_pic {
//           publicURL
//         }
//         linkedin_link
//         name
//         title
//         youtube_link
//         shortDescrption
//       }
//     }
//   }
// `
