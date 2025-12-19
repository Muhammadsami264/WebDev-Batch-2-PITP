const correctAnswers = {
    q1: 'C',
    q2: 'A', 
    q3: 'B'
};

function calculateScore() {
    let score = 0;
    const totalQuestions = 3;
    const resultDiv = document.getElementById('result');

    const userAnswers = document.querySelectorAll('input [type="radio"]:checked');

    userAnswers.forEach((answer) => {
        const questionName = answer.name;

        if (answer.value === correctAnswers[questionName]) {
            score++;
            answer.parentElement.style.color = 'green';
            answer.parentElement.style.font = 'bold';
        } else {
            answer.parentElement.style.color = 'red';
        }
    });

    let feedbackMessage = '';

    if (score === totalQuestions) {
        feedbackMessage = `Amazing! you did perfect answers!`;
    } else if (score >= 1) {
        feedbackMessage = `Not Bad, just keep trying`;
    } else {
        feedbackMessage = `Time to hit the books again`
    }

    resultDiv.innerHTML = `
    <h3>your Results</h3>
    <p>You Scored <storng>${score}</storng> out of <storng>${totalQuestions}</storng> </p>
    <p><em>${feedbackMessage}</em></p> `

}


