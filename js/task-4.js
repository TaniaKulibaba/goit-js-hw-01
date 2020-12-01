const credits = 23580;
const pricePerDroid = 3000;
let message;
const orderPieces = prompt('Сколько дроидов хотите купить?');
if (orderPieces === null) {
    message = 'Отменено пользователем!';
} else {
    const totalPrice = Number(orderPieces) * pricePerDroid;
    const balanceCredit = credits - totalPrice;
    message = totalPrice > credits ? `Недостаточно средств на счету!` : `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов.`;
}
    console.log(message);