const bmi = weight/height**2
console.log(`Your BMI is ${bmi.toFixed(2)}`)
let category;
if(bmi<18.5){
    category="Underweight"
}
if(18.5<=bmi && bmi<=24.9){
    category="Normal weight"
}
if(25<=bmi && bmi<=29.9){
    category="Overweight"
}
if(bmi>=30){
    category="Obesity"
}

console.log(`Health Category: ${category}`)