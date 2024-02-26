//Cумма та кількість позитивних елементів
const massive =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

export function positiveElements (){
const res = massive.reduce((accumulator,value) =>  accumulator + value, 0) 
const count = massive.reduce((accumulator) => accumulator + 1, 0)
return `1.Cумма всіх елементів ${res} та кількість ${count}`
  }
console.log( positiveElements())

function MathMinMassiveCounts (arr){
const minCount = arr.reduce((min,current)=> Math.min(min,current))
const index = arr.indexOf(minCount)
return `2.Знайти мінімальний елемент масиву та його порядковий номер: ${minCount} та його порядковий номер: ${index}` 
}
console.log(MathMinMassiveCounts ( massive))
function MathMaxMassiveCounts (arr){
const maxCount = arr.reduce((max,current) => Math.max(max,current))
const index = arr.indexOf(maxCount)
return `3.Знайти максимальний елемент масиву та його порядковий номер: ${maxCount} та його порядковий номер: ${index}`
}
console.log(MathMaxMassiveCounts(massive))

function negativeElements (){
  const negative = massive.filter(item => item < 0)
  const sum = negative.reduce((item)=> item + 1,0)
return `4.Визначити кількість негативних елементів: ${sum}`}
console.log(negativeElements ())

function noPair (){
  const element = massive.filter(item => item % 2 !== 0)
  const number = element.reduce((item)=>  item + 1,0)
  return `5.Знайти кількість непарних позитивних елементів: ${number}` 
}
console.log(noPair ())

function pairElements (){
  const countsPair = massive.filter(item => item % 2 ===0 )
  const countsNum  = countsPair.reduce((item) => item +1,0)
  return `6.Знайти кількість парних позитивних елементів : ${countsNum}` 
}
console.log(pairElements())

function sumPositiveElements (){
  const countsSum = massive.filter(item => (item > 0 && item %2 === 0))
  const countSumAll = countsSum.reduce((accumulate,item)=> accumulate + item,0)
 return countSumAll
}
console.log(`7.Знайти суму парних позитивних елементів : ${sumPositiveElements()}`)
function noPairPositiveElements (){
  const noPairCounts = massive.filter(item => item > 0 && item %2 !==0)
  const sumNoPairCounts = noPairCounts.reduce((accumulate,item) => accumulate + item,0)
 return  sumNoPairCounts
}
console.log(`8.Знайти суму непарних позитивних елементів : ${noPairPositiveElements()}`)

function additionalPositiveElements(){
  const sum1 = noPairPositiveElements()
  const sum2 = sumPositiveElements()
  return '9.Знайти добуток позитивних елементів : '+ sum1 * sum2
}
console.log(additionalPositiveElements())

function theGreatestNum(arr){
  const max = arr.reduce((max,current) => Math.max(max,current))
  const zeroMas = JSON.stringify(arr.map(item => item === max ? item : 0 ))
  return `10.Знайти найбільший  серед елементів масиву, остальні обнулити : ${max} і інші ${zeroMas}`
}
console.log(theGreatestNum(massive))