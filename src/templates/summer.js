import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Banner from "../components/SummerSchool/banner"
import Welcome from "../components/SummerSchool/WelcomeDetails"
import Subjects from "../components/SummerSchool/Subjects"
import PricingAndPayment from "../components/SummerSchool/PricingAndPayment"
import JoinOurCommunity from "../components/SummerSchool/JoinOurCommunity"
import TermsAndConditions from "../components/SummerSchool/TermsAndConditions"
import OurReviewNames1 from "../components/SummerSchool/OurReviewNames"
import GetInTouch from "../components/GetInTouch"
import OurReview from "../components/OurReview"
import Seo from "../components/Seo/seo"

function Summerschool({ data, location }) {
  const { whatsapp_link, telegram_link, facebook_link } =
    data.strapiSummerSchools
  const check = data.strapiSummerSchools.sample_videos.show_on_website
  return (
    <Container>
        <Seo
          title={data.strapiSummerSchools.summerSchool_Banner.title}
          location={`${location.pathname}`}

          description="This course is suitable for absolute beginners who wish you pave a strong foundation in Machine Learning and AI. The course is crafted to create a complete understanding of the domain of AI regardless of background education. It is however expected that the student has keen interest in Mathematics, Logic and Computer programming."
          image="https://res.cloudinary.com/dtoupvd2u/image/upload/v1625130484/small_36_hours_15_Days_60a9cd52ac.jpg"          
        />
        <Banner data={data.strapiSummerSchools.summerSchool_Banner} />
        <Welcome data={data.strapiSummerSchools.SummerSchool_Welcome_video} />
        <Subjects data={data.strapiSummerSchools.SummerSchool_subjects} />
        <OurReviewNames1
          title="what students say"
          data={data.strapiSummerSchools.allreviews.allreview}
        />
        <OurReview
          title={
            data.strapiSummerSchools.video_feedback.review_video_title
              .main_heading
          }
          data={data.strapiSummerSchools.video_feedback.video_reviews}
          course={true}
        />
        {check && (
          <OurReview
            title={
              data.strapiSummerSchools.sample_videos.review_video_title
                .main_heading
            }
            data={data.strapiSummerSchools.sample_videos.video_reviews}
            course={true}
          />
        )}

        <PricingAndPayment
          data={data.strapiSummerSchools.pricing_and_payment}
          brouchre={data.strapiSummerSchools.brouchre_download_link}
          pricing={data.strapiSummerSchools.pricing_and_payment.choose_pricing}
        />
        <JoinOurCommunity
          whatsappLink={whatsapp_link}
          telegramLink={telegram_link}
          facebookLink={facebook_link}
        />
        <TermsAndConditions
          data={data.strapiSummerSchools.terms_and_conditions}
        />
        <GetInTouch
          action="https://formspree.io/f/mwkaqnnn"
          url="https://certisured.com"
          value="summer school"
        />
    </Container>
  )
}

export default Summerschool
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  > h1 {
    margin-top: 50px;
    border-bottom: 1px solid #ff002b;
    @media (max-width: 479px) {
      text-align: center;
      font-size: 17px;
    }
  }

  @media (max-width: 991px) {
    flex-wrap: wrap;
    overflow: hidden;
  }
`

export const query = graphql`
  query Summer($slug: String) {
    strapiSummerSchools(slug: { eq: $slug }) {
      summerSchool_Banner {
        id
        title
        event_date
        banner_top_logo {
          url
        }
        background_pic {
          url
        }
        In_association_with {
          id
          logos {
            url
          }
        }
      }
      SummerSchool_Welcome_video {
        id
        video_url
        main_title
        title_and_desc {
          descrption
          id
          title
        }
      }

      SummerSchool_subjects {
        id
        instructor {
          description
          designation
          id
          instructor_pic {
            url
          }
          linkedin_url
          name
        }
        title
        summerSchool_curriculum {
          curriculum
          id
        }
        subject_pic {
          url
        }
      }
      allreviews {
        allreview {
          company
          descrption
          id
          linkedInUrl
          name
          rating
          picture {
            url
          }
        }
      }
      pricing_and_payment {
        id
        pricing_details
        register_link
        update_details_link
        update_details_description
        main_title
        choose_pricing {
          amount_entry
          description
          gst_included
          id
          payment_register_link
          title
        }
        choose_your_subject {
          register_link
          title
          id
        }
      }
      terms_and_conditions
      whatsapp_link
      telegram_link
      facebook_link
      brouchre_download_link {
        button_label
        id
        slug_link
      }
      video_feedback {
        id
        show_on_website
        review_video_title {
          id
          main_heading
        }
        video_reviews {
          Youtube_url
          id
          name
        }
      }
      sample_videos {
        id
        show_on_website
        video_reviews {
          Youtube_url
          id
          name
        }
        review_video_title {
          id
          main_heading
        }
      }
    }
  }
`

