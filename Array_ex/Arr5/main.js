function convert (fn, array) {
  return array.map(it => fn(it))
}
//SAU
function convert(fn, array) {
  const newArray = []
  for (let i = 0; i < array.length; ++i) {
    newArray.push(fn(array[i]))
  }
  return newArray
}
//SAU//
function convert (fn, array) {
  return array.map(fn)
}