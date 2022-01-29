import React from "react"
import { context } from "../Tree"
const Node = ({ item, level, onToggle, hasChildren, itemLast }) => {
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
      {item.name}
    </div>
  )
}

export default Node
