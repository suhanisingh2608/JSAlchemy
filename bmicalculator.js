let BMI = (weight / (height * height)).toFixed(2);
if(BMI<18.5){
    healthcat=("Underweight")
 }
 if(18.5<=BMI && BMI<24.9){
    healthcat=("Normal weight")
 }
if(25 <= BMI && BMI < 29.9){
    healthcat=("Overweight")
}
if(BMI >= 30){
    healthcat=("Obesity")

}
console.log(`BMI: ${BMI} \nHealth Category: ${healthcat}`)