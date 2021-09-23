import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import linkedin from "../../images/linkedin.svg"


function Subjects(props) {
  const { data } = props
  return (
    <Wrapper>
      <div className="topic">
        <h4>Subjects</h4>
      </div>
      <div className="inner_grid">
        {data.map(d => {
          return (
            <>
             
              <div className="left_right_wrapper">
              <div className="heading">
                <h2 style={{fontSize: "44px"}}>{d.title}</h2>
              </div>
              <div className="left_section" style={{backgroundImage: `url(${d.subject_pic[0].url})`}}>
                </div>

                <div className="right_section">
                <h4>Curriculum</h4>

                  <div className="right_section_curriculum">

                  {d.summerSchool_curriculum.map(l => {
                  return (
                    <div className="curriculum_instructor_section">

                      <div className="curriculum">
                        <ReactMarkdown>{l.curriculum}</ReactMarkdown>
                      </div>
                    </div>
                  )
                })}
                  </div>
              
                <div className="instructor">
                  <div className="instructor_heading">
                    <h4>Instructor</h4>
                  </div>
                  <div className="instructor_section">
                    <div className="instructor_pic">
                      <img className="profile_photo" src={d.instructor.instructor_pic[0].url} alt="" />
                      <div className="instructor_info">
                        <h4>{d.instructor.name}</h4>
                        <h5 style={{marginTop: "-30px"}}>{d.instructor.designation}</h5>
                     
                    </div>
                    </div>
                    <div className="instructor_desc">
                    <ReactMarkdown className="instructor_desc_markdown">{d.instructor.description}</ReactMarkdown>

                    </div>
                    <div className="instructor_link">
                    <a href={d.instructor.linkedin_url}>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={linkedin}
                      alt=""
                    />
                  </a>
                    </div>
                 
                  </div>
                </div>
              </div>
              </div>
             
        
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Subjects

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 100px;

  .topic {
    grid-area: 1/2/2/11;
  }
  .inner_grid {
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    padding-bottom: 100px;


  }
  .inner_grid_1{
    grid-area: 2/1/3/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: auto;
    padding-bottom: 100px;


  }
  .heading {
    grid-area: auto/2/auto/7;
    @media (max-width:767px){
      grid-area: auto/2/auto/10;
    }
  }
  .left_right_wrapper{
      grid-area: auto/1/auto/12;
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: auto;
      padding: 100px 0;
      margin-bottom: 60px;
      background-color: #F1F1F1;

      @media (max-width:767px){
    margin-bottom: 50px;
    }

  }
  .left_section {
    grid-area: auto/2/auto/6;
    border-radius: 6px;
    height: auto;
    background-size: cover;
    background-position: center;
    @media (max-width:767px){
      grid-area: auto/2/auto/11;
      height: 400px;
    }

  }
  .right_section {
    grid-area: auto/7/auto/11;
    @media (max-width:767px){
      grid-area: auto/2/auto/11;
    }

  }
  .right_section_curriculum{
      height: 300px;
      overflow-y: auto;
      position: relative;
      background-color: #f5f4fd;
      padding: 0 30px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 8px;
      @media (max-width:767px){
    margin-top: 30px;
    }
  }
  .instructor{
      display:flex;
      flex-direction: column;
      width:100%;
      height:auto;
  }
  .instructor_section{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
  }
  .instructor_pic{
      width: 100%;
      display: flex;
  }
  .profile_photo{
      width: 100px;
      height:100px;
      object-fit: cover;
      border-radius: 50%;
  }
  .instructor_info{
      width: 77%;
      padding-left: 15px;
  }
  h5{
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 0;


  }
  h2{
      font-weight: 600;
      @media (max-width:767px){
        font-size: 20px !important;
    }
    @media (max-width:991px){
        font-size: 25px !important;
    }
  }
  p{
    @media (max-width:991px){
        font-size: 14px;
    }
  }
  h4{
    font-size: 22px;
    font-weight: 600;

  }
  .borderLeftRight {
    display: inline-block;
    position: relative;
  }
  .borderLeftRight::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: hsl(243, 80%, 62%);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .borderLeftRight:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .inner_grid_section{
      padding-bottom: 100px;
  }
  .instructor_desc, .instructor_link{
    padding-left: 116px;
    @media (max-width:767px){
      padding-left: 0px;
    }
  }
`
