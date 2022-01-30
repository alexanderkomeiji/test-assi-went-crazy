import React from "react"
import Node from "../Node/Node"
import { useToggle } from "../../useToggle"
import { context } from "../Tree"

export const BranchList = ({ item, level }) => {
  const [selectedBrach, setSelected] = useToggle()

  const setSelectedBranch = React.useCallback(
    () => setSelected(selectedBrach),
    [selectedBrach, setSelected]
  )

  const contextProps = React.useMemo(
    () => ({ setSelectedBranch, selectedBrach }),
    [selectedBrach, setSelectedBranch]
  )

  return (
    <context.Provider value={contextProps}>
      <Branch key={item.id} item={item} level={level} />
    </context.Provider>
  )
}

const Branch = ({ item, level, itemLast }) => {
  console.log(Date.now())
  console.log(item)
  console.log("Level is", level)

  let [selected, setSelected] = useToggle()
  let toggleSelected = React.useCallback(
    () => setSelected(selected),
    [selected, setSelected]
  )
  const { selectedBrach, setSelectedBranch } = React.useContext(context)

  if (level === 0) {
    setSelected = setSelectedBranch
    selected = selectedBrach
  }
  // item.children = Object.keys(item).includes()
  const hasChildren = item.children ? true : false
  let itemLeaf = () => {
    //!item.children?.some((elem, i)=>elem.children) &&
    return (
      item.children && item.children.filter((elem) => !elem.children).at(-1)
    )
  }

  if (hasChildren) {
    console.log("Has children", item.children)
    console.log(itemLeaf(), "is last leaf")
  }

  const renderBranches = () => {
    if (hasChildren) {
      return item.children.map((child) => {
        return (
          <Branch
            key={child.id}
            item={child}
            level={level + 1}
            itemLast={itemLeaf()?.id}
          />
        )
      })
    } else return null
  }

  return (
    <>
      <Node
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        itemLast={itemLast}
        onToggle={toggleSelected}
      />

      {selected && renderBranches()}
    </>
  )
}

export default Branch
