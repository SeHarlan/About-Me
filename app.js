import isYes from '../is-yes.js';
import isNo from '../is-no.js';

const quizButton = document.getElementById('quiz-button');

const quizResults = document.getElementById('results');

quizButton.addEventListener('click', () => {
    const userName = prompt('What is you name?');
    if (userName === null || userName === '') {
        alert('Please enter a name.')
        return;
    }
    const confirmation = confirm(`Do you really though, ${userName}?`);
    if (confirmation === false) return;

    let count = 0;
    const question1 = prompt('Does Scott Read?');
    const question2 = prompt('Has he lived more than six states?');
    const question3 = prompt('Does Scott like music?');

    if (isYes(question1) === true) count += 1;
    if (isNo(question2) === true) count += 1;
    if (isYes(question3) === true) count += 1;
    
    let percentage = count / 3 * 100; 
    let roundPercentage = Math.round(percentage)

    if (count === 0) {
        quizResults.textContent = `Sorry ${userName}, you didn't get any correct.`;
        quizResults.style.color = 'red';

    } else if (count === 1) {
        quizResults.textContent = `Good try ${userName}, but you only got one right. That is  ${roundPercentage}%.`;
        quizResults.style.color = 'yellow';

    } else {
        
        quizResults.textContent = `Congrats ${userName}, you got ${count}/3 correct! That is ${roundPercentage}%!`;
        quizResults.style.color = 'green';

    }
    quizResults.style.opacity = '1';


});
