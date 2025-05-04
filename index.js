const btnGetScheme = document.getElementById("get-scheme-btn")
const colorBlocks = document.querySelectorAll(".color-block")
const hexCodes = document.querySelectorAll(".hex")

btnGetScheme.addEventListener("click", function(){
   let seedColor = document.getElementById("seed-color").value
   let colorType = document.getElementById("color-type").value
   console.log(seedColor)
   document.getElementById("color-hex-display-test").innerHTML = seedColor + " and " + colorType

})

   fetch ("https://www.thecolorapi.com")
   .then(res=>res.json())
   .then(data=>{
      const colorsSection = data.slice(0,5)
      let colorsSet = ""
      for (let color of colorsSection){
         colorsSet += 
         <div class="color-block">
            <div class="color"></div>
            <div class="hex">${color.hex.value}</div>
         </div>
      }
      document.querySelector(".five-color-section").innerHTML = colorsSet
})

