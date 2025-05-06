// Establishing color scheme button
const btnGetScheme = document.getElementById("get-scheme-btn")

// Button protocol
btnGetScheme.addEventListener("click", function(){
   let seedColor = document.getElementById("seed-color").value
   let colorType = document.getElementById("color-type").value

   // remove numeric symbol from hex code
   seedColor = seedColor.slice(1)

   // connect to the API with selected hex and mode
   fetch (`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorType}`)
   .then(res=>res.json())
   .then(data=>{
      // extract first 5 colors
      const colorsSection = data.colors.slice(0,5)
      let colorsSet = ""
      // use empty string to create a div with visual and hex value
      for (let color of colorsSection){
         colorsSet += `
         <div class="color-block">
            <div class="color" style="background-color: ${color.hex.value}"></div>
            <div class="hex">${color.hex.value}</div>
         </div>
         `
      }
   document.querySelector(".five-color-section").innerHTML = colorsSet
})
})