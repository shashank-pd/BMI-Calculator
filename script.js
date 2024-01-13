const form = document.querySelector('form');
const results = document.querySelector('#guide');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    let bmi = 0;
    

    if (height === '' || height < 0 || isNaN(height)) {
        alert('Invalid height. Please enter a valid positive number.');
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert('Invalid weight. Please enter a valid positive number.');
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        alert('BMI: ' + bmi);

        const para = document.createElement('p');
        para.innerHTML = `Your BMI is : ${bmi}`;
        form.prepend(para);
    }

});
   
