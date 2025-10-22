function getHexaColor(color){
const [r,g,b]=color;
const red=r.toString(16).padStart(2,'0')
const green=g.toString(16).padStart(2,'0')
const blue=b.toString(16).padStart(2,'0')
return "#"+(red+green+blue).toUpperCase()
}
console.log(getHexaColor([255, 165, 0]))