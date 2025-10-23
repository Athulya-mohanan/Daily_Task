enum Directions{Top="UP",Bottom="Down",Right="Right",Left="left"}

function selectDirections(directions:Directions):String{

   return `you moved ${directions}!`
}
console.log(selectDirections(Directions.Bottom))


