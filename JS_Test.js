function BMI(){
    var h = parseFloat(prompt("Input your height in metres: "));
    var w = parseFloat(prompt("Input your weight in kilogrammes: "));
    var h2 = h*h;
    while(true){
        if(isNaN(h,w) ||h,0||w<0 ){
            alert("input valid positive number")
            return;
        }
    
    var bmi = w/h2;
    if (bmi > 1 || bmi <18.5){
        document.write("Your BMI is " + bmi + ". You are underweight ")
    }
    else if (bmi > 18.5 || bmi < 24.9){
        document.write("Your BMI is " + bmi + ". You are normal weight ")
    }
    else if (bmi > 25 || bmi < 29.9){
        document.write("Your BMI is " + bmi + ". You are overweight ")
        }
    else if (bmi = 30 || bmi > 30){
        document.write("Your BMI is " + bmi + ". You are obese")
    }
    else{
        break;}
   
    }
}
    
BMI();