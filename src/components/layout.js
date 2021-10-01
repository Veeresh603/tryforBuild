import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import SEO from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Analogo from "../images/Certisured Final Logo XXX.svg"
import FooterLogo from "../images/certisured white.svg"
import Helmet from "react-helmet"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import AuthContext from "./context/AuthContext"

// import { withPrefix, Link } from "gatsby"

function Layout(props) {
  React.useEffect(() => {
    var Tawk_API = Tawk_API || {}
    Tawk_API.visitor = {
      name: "visitor name",
      email: "visitor@email.com",
    }
    var Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = "https://embed.tawk.to/612e22f7d6e7610a49b2e683/1fee3h5uh"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      s0.parentNode.insertBefore(s1, s0)
    })()

    Tawk_API.onLoad = function () {
      Tawk_API.setAttributes(
        {
          name: "Name",
          email: "email@email.com",
          hash: "hash value",
        },
        function (error) {}
      )
    }
  }, [])

  const BusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Certisured",
    image:
      "https://certisured.com/static/hero%20Image-084597c26ab29e3eabb2603f82d262f5.svg",
    "@id": "",
    url: "https://certisured.com/",
    telephone: "096066 98866",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3/2. 34th cross, 2nd block, Dr Rajkumar Road",
      addressLocality: "Bangalore",
      postalCode: "560010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9933283,
      longitude: 77.5553846,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.facebook.com/certifiedforsure",
      "https://twitter.com/certisured",
      "https://www.instagram.com/certisured/",
      "https://www.youtube.com/channel/UC0_qZH4XvMYMRp9dmta4RFw",
      "https://www.linkedin.com/company/certisured/?viewAsMember=true",
      "https://certisured.com/",
    ],
  }
  return (
    <>
      <Helmet>
        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
        <script type="application/ld+json">
          {JSON.stringify(BusinessSchema)}
        </script>
        {/* <script src="https://unpkg.com/wavesurfer.js"></script> */}

        <script
          defer
          type="module"
          src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@0.6.2/lite-youtube.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Helmet>

      {/* <SEO /> */}
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Analogo} />
      <div className="layout">{props.children}</div>
      <Footer Logo={FooterLogo} />
    </>
  )
}

export default Layout
