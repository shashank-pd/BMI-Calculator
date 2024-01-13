    if (height === '' || height < 0 || isNaN(height)) {
//         alert('Invalid height. Please enter a valid positive number.');
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         alert('Invalid weight. Please enter a valid positive number.');
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         alert('BMI: ' + bmi);
//     }
//     const guide = document.getElementById('guide');
//     let category = '';

//     if (bmi < 18.5) {
//         category = 'Underweight';
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         category = 'Normal weight';
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         category = 'Overweight';
//     } else if (bmi >= 30 && bmi <= 34.9) {
//         category = 'Obesity (Class 1)';
//     } else if (bmi >= 35 && bmi <= 39.9) {
//         category = 'Obesity (Class 2)';
//     } else {
//         category = 'Obesity (Class 3)';
//     }

//     guide.innerHTML = `<h3>BMI WEIGHT guide</h3><p>${category}: BMI ${bmi}</p>`;

// });