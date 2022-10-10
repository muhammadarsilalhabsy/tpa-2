
let getButton = document.getElementById("btn");

getButton.addEventListener("click", calculateBMI);


// BMI check
function calculateBMI (){
    // get value
    let getBB = document.querySelector("#kg").value;
    let getTB = document.querySelector("#cm").value;
    
    // create an element
    
    let getDivResult = document.getElementById("resultBMI");
    getDivResult.innerText = " ";

    // calculate
    let rBB = Number(getBB);
    let rTB = Number(getTB)/100;
    let pwTB = Math.pow(rTB, 2);
    let result = rBB / pwTB;
    let fixResult = result.toFixed(1);
    let desc;

    if (!isNaN(getBB) && !isNaN(getTB)){
        if(fixResult >= 30){
            desc = `Your BMI is ${fixResult} which means Your are Obesity`;
        }else if (fixResult >= 18.5 || fixResult <= 24.8){
            desc = `Your BMI is ${fixResult} which means Your are Normal`;
        }else if (fixResult >= 25 || fixResult <= 29.9){
            desc = `Your BMI is ${fixResult} which means Your are Overweight`;
        }else {
            desc = `Your BMI is ${fixResult} which means Your are Underweight`;
        }
        getDivResult.innerHTML = desc;
    }else {
        getDivResult.innerHTML = "Please check your input!"    
    }
}