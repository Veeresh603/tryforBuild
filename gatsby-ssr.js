import React from "react"
import Layout from "./src/components/layout"
import { AuthProvider } from "./src/components/context/AuthContext"
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";


export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)


