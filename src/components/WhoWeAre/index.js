import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import right from "../../images/whoweareright.png"
import left from "../../images/whoweareleft.png"

import HeadingBorderAnimation from "../HeadingBorderAnim"

function WhoWeAre(props) {
  return (
    <Wrapper>
      <div className="section">
        <div className="section_right">
          <img
            src={right}
            className="right_image"
            alt="who_we_are_right"
          />
          {/* <div className="rectangle_box">
            <img src={props.data.left_bottom_imge.url} alt="" />
          </div> */}
        </div>

        <div className="section_middle">
          <div className="heading">
            <HeadingBorderAnimation>{props.title}</HeadingBorderAnimation>
          </div>
          <div className="text">
            <h4>{props.shortDescrption}</h4>
          </div>

          {/* <div className="button">
            <LinkTo path="/whatwedo">Learn More</LinkTo>{" "}
          </div> */}
        </div>
        <div className="section_left">
          <img
            src={left}
            className="left_image"
            alt="who_we_are_left"
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default WhoWeAre

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .section {
    width: 100%;
    height: 714.25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    @media (max-width: 479px) {
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      height: auto;
    }
  }

  .section_right {
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    height: 714.25px;
    .right_image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    .bg__header {
      width: 100%;
      clip-path: circle(86% at 12% 8%);
    }
    @media (max-width: 767px) {
      height: auto;
      width: 50%;
    }
  }
  .rectangle_box {
    position: absolute;
    width: 100%;
    height: 60%;
    background-color: #000000;
    border-radius: 5px;
    bottom: 0;
    margin-bottom: -170px;
    display: block;

    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .section_middle {
    width: 60%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    align-content: center;
    height: 714.25px;
    padding: 0 80px;
    @media (max-width: 767px) {
      
      padding: 0 20px;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      height: auto;
      width: 100%;
      padding-top: 70px;
    }
    .heading {
      width: 100%;
      display: flex;
      align-items: flex-start;
      align-self: flex-start;
    }
    .text {
      width: 100%;
      height: auto;

      h4 {
        letter-spacing: 0.115em;
        line-height: 28px;
        font-size: 20px;

        font-family: var(--family);
        font-weight: 300;
        @media (max-width: 479px) {
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 23px;
        }
      }
    }
    .para {
      width: 100%;
      height: auto;

      p {
        font-size: 16px;
        font-family: var(--family);
        font-weight: var(--LightWeight);
        margin: 0;
        @media (max-width: 479px) {
          font-size: 14px;
          margin-top: 0;
        }
      }
    }
  }

  .section_left {
    width: 20%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    height: 714.25px;
    padding-bottom: 70px;
    .left_image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .button {
    width: 100%;
    margin-top: 25px;
    display: flex;
  }
`
