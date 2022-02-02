export const aG = ({ quantity = 0, depth = 0 }) => {
  // const array = [
  //   ...Array.from({length: quantity}, () => ({
  //     id: `FRUIT ${Math.random()}`,
  //     name: `NOT MEAT + ${Math.random()}`,}))
  //   ,
  // ];
  type Array = {
    id: string
    name: string
    children?: Array[]
  }
  const array: Array[] = [
    ...Array({
      id: `FRUIT ${Math.random()}`,
      name: `NOT MEAT + ${Math.random()}`,
    }),
  ]
  depth -= 1

  for (let i = 0; i < depth; i++) {
    array.push({
      id: `MEAT ${Math.random()}`,
      name: `NOT FRUIT ${Math.random()}`,
      children: aG({ quantity, depth }),
    })
  }

  return array
}
