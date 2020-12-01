let total = 0;
while (true) {
    let input = prompt('Введите число');
    
    if (input === null) {
        console.log('Отменено пользователем!')
        break;
    }

    input = Number(input);
    total += input;
}
console.log(`Общая сумма чисел равна ${total}`);