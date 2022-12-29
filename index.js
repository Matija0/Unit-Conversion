/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl= document.getElementById("input-el")
const convertBtn= document.getElementById("convert-btn")
const lenghtEl= document.getElementById("lenght-el")
const volumeEl= document.getElementById("volume-el")
const massEl= document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
   calculateLeght()
   calculateVolume() 
   calculateMass()
})

function calculateLeght(){
    const feet= (inputEl.value*3.281).toFixed(3)
    const meters= (inputEl.value/3.281).toFixed(3)
    let conversion=`${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`
    lenghtEl.innerHTML=conversion
    
}

function calculateVolume(){
    const liters= (inputEl.value/3.785).toFixed(3)
    const gallons= (inputEl.value*3.785).toFixed(3)
    let conversion=`${inputEl.value} liters = ${liters} gallons | ${inputEl.value} gallons = ${gallons} liters`
    volumeEl.innerHTML=conversion
}

function calculateMass(){
    const kilos= (inputEl.value/2.204).toFixed(3)
    const pounds= (inputEl.value*2.204).toFixed(3)
    let conversion=`${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilos} kilos`
    massEl.innerHTML=conversion
}