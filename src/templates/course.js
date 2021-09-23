import React from "react"
import styled from "styled-components"
// import { Seo, CourseTab, Hero } from "../components/index"
// import Overview from '../components/Overview'
import Seo from "../components/Seo/seo"
import CourseTab from "../components/CourseTab/index"
import Hero from "../components/Hero/hero"
import { graphql } from "gatsby"

function Course({ data, location }) {
  const {
    title,
    overview,
    author,
    curriculum,
    course_image,
    id,
    slug,
    button,
  } = data.strapiCourse
  return (
    <Wrapper>
      <Seo
        title={title}
        location={`${location.pathname}`}

        description={overview}
      />
      <Hero
        title={title}
        banner={course_image.localFile.childImageSharp.gatsbyImageData}
        link="/training"
        linktitle="BACK TO TRAINING"
      />
      <CourseTab
        title={title}
        overview={overview}
        curriculum={curriculum}
        author={author}
        id={id}
        slug={slug}
        button={button}
      />
      {/* <Overview data={data.strapiCourse.overview} /> */}
    </Wrapper>
  )
}

export default Course

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`
export const query = graphql`
  query SingleCourse($slug: String) {
    strapiCourse(slug: { eq: $slug }) {
      title
      id
      slug
      overview
      button {
        button_label
        slug_link
        id
      }
      curriculum {
        id
        panel
        title
        subtopic {
          id
          subTopic
          topic
          id
        }
      }
      course_image {
        localFile{
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
      }
      author {
        name
        descrption
        author_image {
          url
        }
        rating
      }
    }
  }
`

