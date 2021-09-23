// import React from "react"
// import styled from "styled-components"
// import { IoIosArrowBack } from "react-icons/io"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import vector from "../images/Vector.svg"
// import vector1 from "../images/Vector(3).svg"
// import vector2 from "../images/Vector(4).svg"
// import ReactMarkdown from "react-markdown"

// function BlogDetails({ data }) {
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
//     <Wrapper>
//       <div className="blog_details_wrapper">
//         <div className="blog_back_to">
//           <IoIosArrowBack />
//           <Link className="back_button" to="/blogs">
//             blogs
//           </Link>
//         </div>
//         <div className="blog_details_section">
//           <div className="blog_details_title">
//             <h1>{title}</h1>
//           </div>
//           <div className="blog_details_profile_wrapper">
//             <div className="blog_details_profile_section">
//               <div
//                 className="profile_image"
//                 style={{ backgroundImage: `url(${blogger_pic.publicURL})` }}
//               ></div>
//               <div className="blog_details_profile_name">
//                 <h3>{name}</h3>
//               </div>
//             </div>
//             <div className="blog_details_profile_social">
//               <img className="social_icon" src={vector} alt="" />
//               <img className="social_icon" src={vector1} alt="" />
//               <img className="social_icon" src={vector2} alt="" />
//             </div>
//           </div>
//           <div className="blog_details_desc">
//               <ReactMarkdown>
//                   {Descrption}
//               </ReactMarkdown>
//           </div>
//           <div className="profile_card">
//             <div className="profile_name_social_icons">
//               <div
//                 className="profile_image1"
//                 style={{ backgroundImage: `url(${blogger_pic.publicURL})` }}
//               />
//               <div className="right_section">
//                 <div className="right_section_flex_row">
//                   <div className="card_name">
//                     <h3>{name}</h3>
//                   </div>
//                   <div className="blog_details_profile_social">
//                     <img className="social_icon" src={vector} alt="" />
//                     <img className="social_icon" src={vector1} alt="" />
//                     <img className="social_icon" src={vector2} alt="" />
//                   </div>
//                 </div>
//                 <div className="right_section_desc">
//                   <h4>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Dictumst mi nascetur in luctus est id phasellus risus
//                     egestas. Leo convallis velit pharetra, lectus.
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   )
// }

// export default BlogDetails

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-rows: auto;
//   grid-template-columns: repeat(11, 1fr);
//   width: 100%;
//   height: auto;
//   margin-top: 100px;

//   .blog_details_wrapper {
//     grid-area: 1/2/2/11;
//     display: flex;
//     flex-direction: column;
//   }
//   .blog_back_to {
//     display: flex;
//     align-items: center;
//   }
//   .back_button {
//     font-size: 24px;
//     text-decoration: none;
//     color: var(--secondaryColor);
//   }
//   .blog_details_section {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: auto;
//     padding: 0 200px;
//     align-items: center;
//   }
//   .blog_details_profile_wrapper {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     height: auto;
//     justify-content: space-between;
//   }
//   .blog_details_profile_section {
//     display: flex;
//   }
//   h1 {
//     font-size: 44px;
//   }
//   .profile_image {
//     width: 100px;
//     height: 100px;
//     border-radius: 123.948px;
//   }
//   .blog_details_profile_name {
//     margin-left: 10px;
//   }
//   .social_icon {
//     margin-left: 15px;
//   }
//   .profile_card {
//     display: flex;
//     flex-direction: column;
//     width: 80%;
//     height: auto;
//     background: #f8f8f8;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
//     border-radius: 5px;
//   }
//   .profile_name_social_icons {
//     display: grid;
//     grid-template-columns: repeat(11, 1fr);
//     grid-template-rows: auto;
//     width: 100%;
//   }
//   .profile_image1 {
//     grid-area: 1/2/2/4;
//     width: 80px;
//     height: 80px;
//     border-radius: 123.948px;
//   }
//   .right_section {
//     grid-area: 1/4/2/11;
//   }
//   .right_section_flex_row {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
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
