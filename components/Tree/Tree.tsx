import React from "react"
import { aG } from "../../lib/aG"
import Branch, { BranchList } from "./Branch/Branch"
import { Node as Leaf } from "./Node/Node"
export type Context = { selectedBrach: boolean; setSelectedBranch: () => void }
export const context = React.createContext<Context>({
  selectedBrach: false,
  setSelectedBranch: () => ({}),
})

const Tree = ({ data }: { data: Branch<Leaf>[] }) => {
  const TestData = aG({ quantity: 10, depth: 10 })

  interface GenericIdentityFn<Type> {
    children?: Type
    <Type>(arg: Type): Type
  }
  return (
    <div>
      {data.map((item) => (
        <BranchList key={item.id} item={item} level={0} />
      ))}
    </div>
  )
}

export default Tree
