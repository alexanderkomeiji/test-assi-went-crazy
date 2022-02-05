import React from "react"
import { Node as Leaf } from "../Node/Node"
import Node from "../Node/Node"
import { useToggle } from "../../../lib/useToggle"
import { Context, context } from "../Tree"

export const BranchList = ({ item, level }: BranchList) => {
  const [selectedBrach, setSelected] = useToggle()

  const setSelectedBranch = React.useCallback(
    () => setSelected(),
    [selectedBrach, setSelected]
  )

  const contextProps: Context = React.useMemo(
    () => ({ setSelectedBranch, selectedBrach }),
    [selectedBrach, setSelectedBranch]
  )

  return (
    <context.Provider value={contextProps}>
      <ul>
        <Branch item={item} level={level} />
      </ul>
    </context.Provider>
  )
}

export type BranchList = {
  level: number
  item: Branch<Leaf>
}
type Branch<Type> = Type & {
  children?: Branch<Type>[]
  id: number
}

const Branch = ({
  item,
  level,
  itemLast,
}: {
  item: Branch<Leaf>
  level: Leaf["level"]
  itemLast?: Leaf["itemLast"]
}) => {
  let [selected, setSelected] = useToggle()
  const toggleSelected = React.useCallback(
    () => setSelected(),
    [selected, setSelected]
  )
  const { selectedBrach, setSelectedBranch } = React.useContext(context)

  if (level === 0) {
    setSelected = setSelectedBranch
    selected = selectedBrach
  }
  const hasChildren = item.children ? true : false
  const itemLeaf = () => {
    return item.children?.filter((elem) => !elem.children).at(-1)
  }

  const renderBranches = () => {
    if (hasChildren) {
      return item.children?.map((child) => {
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
        id={item.id}
        onToggle={toggleSelected}
        name={item.name}
      >
        <ul>{selected && renderBranches()}</ul>
      </Node>
    </>
  )
}

export default Branch
