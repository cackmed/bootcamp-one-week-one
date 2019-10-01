import { isCorrect } from './functions.js'; 


const myButton = document.getElementById('action-button');


myButton.onclick = function() {
    alert('Welcome to my quiz');
    const myConfirmation = confirm('Do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('What is you Name?');
    const trimedLowercaseUserAnswer = userAnswer.toLowerCase().trim();
    console.log(userAnswer);
  
    const userAnswer2 = prompt('Have I ever had a pet rock? (yes/no)');
    const trimedLowercaseUserAnswer2 = userAnswer2.toLowerCase().trim();
    console.log(userAnswer2);

    if (trimedLowercaseUserAnswer2 === 'yes')
        alert('bad start');
    else {
        alert('That is correct');
    }
    isCorrect(trimedLowercaseUserAnswer2);

    const userAnswer3 = prompt('Did I sell products on Amazon? (yes/no)');
    const trimedLowercaseUserAnswer3 = userAnswer3.toLowerCase().trim();
    console.log(userAnswer3);
    if (trimedLowercaseUserAnswer3 === 'yes')
        alert('Incredible');
    else {
        alert('Sadly that is wrong');
    }
    isCorrect(trimedLowercaseUserAnswer3);
    
    const userAnswer4 = prompt('Was I born in Portland? (yes/no)');
    const trimedLowercaseUserAnswer4 = userAnswer4.toLowerCase().trim();
    console.log(userAnswer4);
    if (trimedLowercaseUserAnswer4 === 'yes')
        alert('how did you know!!?!?');
    else {
        alert('I am afraid that is incorrect');
    }
    isCorrect(trimedLowercaseUserAnswer4);

    

};
