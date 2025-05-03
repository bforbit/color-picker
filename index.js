const btnGetScheme = document.getElementById("get-scheme-btn")
const colorBlocks = document.querySelectorAll(".color-block")
const hexCodes = document.querySelectorAll(".hex")

btnGetScheme.addEventListener("click", function(){
   let seedColor = document.getElementById("seed-color").value
   let colorType = document.getElementById("color-type").value
   console.log(seedColor)
   document.getElementById("color-hex-display-test").innerHTML = seedColor + " and " + colorType
})