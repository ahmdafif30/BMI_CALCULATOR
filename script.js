const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

// button
form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
    bmiText.textContent= 0;
    bmiText.className= "";
    descText.textContent = "N/A";
}

function onFormSubmit(e) {
    e.preventDefault();

    //interpret BMI
    const berat = parseFloat(form.berat.value);
    const tinggi = parseFloat(form.tinggi.value);

    if(isNaN(berat) ||isNaN(tinggi)|| berat <= 0 || tinggi <= 0 ) {
        alert("Please enter a Valid Weight and Height");
        return;
    }

    //calculate BMI
    const tinggiInMeters = tinggi / 100; // cm -> m
    const bmi = berat / Math.pow(tinggiInMeters, 2);
    const desc = interpretBMI(bmi);

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;
    descText.innerHTML = `which means you are ${desc}`; 
}

// BMI logic
function interpretBMI(bmi) {
if (bmi < 18.5) {
    return "underweight";
} else if (bmi < 25) {
    return "normal";
} else if (bmi < 30) {
    return "overweight";
} else {
    return "obese";
}
}