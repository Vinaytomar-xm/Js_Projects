const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const calculateBtn = document.querySelector('#calculate')
const result = document.querySelector('#result')

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const heightValue = parseInt(height.value)
    const weightValue = parseInt(weight.value)

    if (isNaN(heightValue) || heightValue <= 0 ){
        result.innerHTML = 'Please enter a valid height'
    }
    else if (isNaN(weightValue) || weightValue <= 0 ){
        result.innerHTML = 'Please enter a valid weight'
    }
    else {
        const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`

        if(bmi < 18.5){
            result.innerHTML += '<br>You are underweight'

        }
        else if (bmi >= 18.5 && bmi < 24.9){
            result.innerHTML += '<br>You have a normal weight'
        }
        else {
            result.innerHTML += '<br>You are overweight'
        }
    }

})