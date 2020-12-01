const countryName = prompt('Введите название страны для доставки');
let country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
let deliveryPrice;
let message;
if (country === null) {
    message = 'Отменено пользователем!';
} else {
    switch (country) {
        case 'Китай':
            deliveryPrice = '100';
            break;
    
        case 'Чили':
            deliveryPrice = '250';
            break;
    
        case 'Австралия':
            deliveryPrice = '170';
            break;
    
        case 'Индия':
            deliveryPrice = '80';
            break;
    
        case 'Ямайка':
            deliveryPrice = '120';
            break;
    
        default:
            message = 'В вашей стране доставка не доступна';
            break;
    }
}
if (deliveryPrice > 0) {
  message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
}

alert(message);