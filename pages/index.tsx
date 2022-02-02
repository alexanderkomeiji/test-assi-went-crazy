import React, { useState } from "react"
import { ApolloQueryResult, gql } from "@apollo/client"
import client from "../apollo-client"
import Tree from "../components/Tree/Tree"
import { aG } from "../lib/aG"
import Branch from "../components/Tree/Branch/Branch"
import { Node as Leaf } from "../components/Tree/Node/Node"

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

export default function Home({ continents }: { continents: Branch<Leaf>[] }) {
  // const handleSubmit = (e) => (
  //   console.log(state),
  //   e.preventDefault(),
  // setState(aG({ quantity: width, depth: height }))
  // )
  return (
    <>
      {/* {state && <Tree data={state} />} */}
      {/* <input type="number" value={height} onChange={handleSetHeight}></input> */}
      {/* <input type="number" value={width} onChange={handleSetWidth}></input> */}
      {/* <button onSubmit={handleSubmit}></button> */}
      {/* // <Suspense fallback={<h1>'loading...'</h1>}> */}
      <Tree data={continents} />
      {/* </Suspense>  */}
    </>
  )
}
