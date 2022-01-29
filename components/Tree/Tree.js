import React from "react"
import { aG } from "./aG"
import { BranchList } from "./Branch/Branch"
export const context = React.createContext({})

const Tree = ({ data }) => {
  let TestData = aG({ quantity: 10, depth: 10 })

  return (
    <div>
      {data.map((item) => (
        <BranchList key={item.id} item={item} level={0} />
      ))}
    </div>
  )
}

export default Tree
