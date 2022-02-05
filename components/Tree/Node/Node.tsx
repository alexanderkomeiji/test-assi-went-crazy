import React, { ReactChildren, ReactElement } from "react"
import Branch from "../Branch/Branch"
//import { Node } from "../Branch/Branch"
import { context } from "../Tree"

export type Node = {
  selected: boolean
  hasChildren: boolean
  level: number
  itemLast?: number | undefined
  onToggle: () => void
  id: number
  item: Branch<Node>
  children?: React.ReactNode
  name?: string
}

const Node = ({
  item,
  level,
  onToggle,
  hasChildren,
  itemLast,
  name,
  children,
}: Node) => {
  const { setSelectedBranch } = React.useContext(context)

  return (
    <>
      <li
        style={hasChildren ? { color: "red" } : {}}
        onClick={() =>
          itemLast === item.id ? setSelectedBranch() : hasChildren && onToggle()
        }
      >
        {name}
      </li>
      {children}
    </>
  )
}

export default Node
