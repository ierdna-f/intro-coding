const takeEvens = (array) => array.filter( e => e % 2 == 0 ) 
const takeOdds = (array) => array.filter( e => e % 2)

const sumAllElements = (arr) => arr.reduce((partialSum, element) => partialSum + element, 0)
const mediaArr = (arr) => (sumAllElements(arr) / arr.length).toFixed(2);

const findMinMax = (array) => {
  array.sort((a, b)=> {
    if (a < b) return -1; 
    if (a > b) return 1;
    return 0;
  })
  return [array[0], array[array.length-1]]
}

const sumRepetitions = (arr) => {
  const repeated = new Map()
  arr.forEach(e => {
    repeated.set(e , (repeated.get(e) || 0 ) + 1);
  })
  return repeated
}

const removeSingle = (map) => {
  const ans = {}
  map.forEach((value, key) => { if(value > 1) ans[key] = value })
  return ans
}

const sumEvens = (arr) => sumAllElements(takeEvens(arr))
const getPercentage = (n) => `${(100 * n).toFixed(2)} %`

const percentageOddNumbers = (arr) => getPercentage(takeOdds(arr).length / arr.length)
const getRepeateds = (values) => removeSingle(sumRepetitions(values))

module.exports = {
  mediaArr,
  minMax: findMinMax,
  getRepeat: getRepeateds,
  sumEvens,
  percentageOddNumbers,
  getPercentage
}
