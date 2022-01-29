import React from "react"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import Tree from "../components/Tree/Tree"
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Continents {
        continents {
          name
          id: code
          children: countries {
            code
            name
            emoji
            id: code
            children: languages {
              name
              id: code
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      continents: data.continents,
    },
  }
}

export default function Home({ continents }) {
  return (
    // <Suspense fallback={<h1>'loading...'</h1>}>
    <Tree data={continents} />
    /* </Suspense> */
  )
}
