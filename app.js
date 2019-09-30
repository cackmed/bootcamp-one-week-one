import { isCorrect } from './functions.js'; 


const myButton = document.getElementById('action-button');


myButton.onclick = function() {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color blueish? (yes/no');
    const trimedLowercaseUserAnswer = userAnswer.toLowerCase().trim();
    console.log(userAnswer);

    if (trimedLowercaseUserAnswer === 'yes')
        alert('right O');
    else {
        alert('nahhh');
    }
    isCorrect(trimedLowercaseUserAnswer);
};
