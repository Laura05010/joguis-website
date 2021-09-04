import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Quiénes Somos" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Quiénes Somos
            </h1>
            <h2 className="text-xl leading-tight font-semibold tracking-tight text-purple-600 sm:text-2xl">
              Para ti con todo mi corazón, simplemente ... Porque Te Quiero Mucho
            </h2>
            <div className="text-justify mt-3 leading-loose">
              En <b className="text-pink-600">Porque TQM </b>, nuestra prioridad es poner a tu alcance detalles de alta calidad y regalos originales,
              nuestro objetivo es ofrecer algo más que un regalo.
              Estamos comprometidos en regalar un momento inolvidable que quedará en la memoria y el corazón del sorprendido.
              <br />
              <br />
              <b className="text-pink-600">Porque TQM </b>, quiere ayudarte a sorprender a tu ser querido,
              ninguna ocasión o detalle es pequeño o insignificante,
              nosotros nos aseguramos que cada detalle tenga el sello de calidad, originalidad y amor que quieres transmitir. 
              Cuéntanos que tienes en mente y juntos trabajaremos para hacerlo realidad.
              <br />
              <br />
              Contáctanos:
              <br />
              <a href="tel:321 971 3303" className=" border-b border-gray-500 hover:border-pink-600 hover:text-pink-600">321-971-3303</a>
              <br />
              <a
                href="mailto:porqueTQMColombia@gmail.comm"
                className=" border-b border-gray-500 hover:border-pink-600 hover:text-pink-600"
              >
                porqueTQMColombia@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Rosas de colores"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    {/* <Newsletter /> */}
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 450, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
