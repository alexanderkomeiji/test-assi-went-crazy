import React from "react"
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
  name?: string
}

const Node = ({ item, level, onToggle, hasChildren, itemLast, name }: Node) => {
  const { setSelectedBranch } = React.useContext(context)

  return (
    <div
      style={
        hasChildren
          ? { paddingLeft: `${level * 16}px`, color: "red" }
          : { paddingLeft: `${level * 16}px` }
      }
      onClick={() =>
        itemLast === item.id ? setSelectedBranch() : hasChildren && onToggle()
      }
    >
      {name}
    </div>
  )
}

export default Node
