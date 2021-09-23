import React from "react"
import Layout from "./src/components/layout"
import { AuthProvider } from "./src/components/context/AuthContext"


export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)


