const choices = ['Камень', 'Бумага', 'Ножницы'];
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.textContent;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (userChoice === computerChoice) {
            result = 'Ничья!';
        } else if (
            (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
            (userChoice === 'Бумага' && computerChoice === 'Камень') ||
            (userChoice === 'Ножницы' && computerChoice === 'Бумага')
        ) {
            result = `Ты победил! Компьютер выбрал ${computerChoice}.`;
        } else {
            result = `Ты проиграл. Компьютер выбрал ${computerChoice}.`;
        }

        resultDiv.textContent = result;
    });
});