import React from "react"
import styled from "styled-components"
import linkedin from "../images/linkedin.svg"
import blog from "../images/blogPexels.jpg"
import ReactMarkdown from "react-markdown"

function BlogList() {
  return (
    <Wrapper>
      <div className="heading">
        <h4>blogs</h4>
      </div>

      {/* title and category */}

      <div className="title_categories">
        <div className="categories">
          <h6>category</h6>
          <h6>category</h6>
        </div>
        <div className="title">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan,{" "}
          </h1>
        </div>
      </div>

      {/* author profile */}

      <div className="author_profile">
        <div className="author_name_and_pic">
          <div className="author_pic">
            <img src={blog} alt="" />
          </div>
          <div className="author_name">
            <h3>Name Surname</h3>
          </div>
        </div>
        <div className="links_wrapper">
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>

      {/* description */}
      <div className="blog_desc">
          <ReactMarkdown>

          </ReactMarkdown>
      </div>
    </Wrapper>
  )
}

export default BlogList

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  height: auto;
  margin-top: 100px;

  .heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: flex-start;
  }

  .title_categories {
    grid-area: 2/3/3/10;
    display: flex;
    flex-direction: column;
    .categories {
      display: flex;
      flex-direction: row;
      min-width: 200px;
      justify-content: flex-start;
      h6 {
        font-weight: 700;
        color: var(--purpleColor);
        font-size: 12px;
        margin-right: 6px;
      }
    }

    .title {
      h1 {
        font-weight: 600;
        font-size: 42px;
        color: #151515;
      }
    }
  }
  .author_profile {
    grid-area: 3/4/4/9;
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    .author_name_and_pic {
      grid-area: 1/1/2/2;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .author_pic {
        display: block;
        width: 99.95px;
        height: 99.95px;
        margin-right: 10px;
        border-radius: 92.3163px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 92.3163px;

        }
      }
      .author_name {
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 600;
          font-size: 24px;
          letter-spacing: 0.07em;
          color: #000000;
        }
      }
    }

    .links_wrapper {
      grid-area: 1/2/2/3;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        text-decoration: none;
      }

      img {
        width: 23.29px;
        height: 23.29px;
        margin-right: 10px;
      }
    }
  }
  .blog_desc{
      grid-area: 4/4/5/9;
  }
`
