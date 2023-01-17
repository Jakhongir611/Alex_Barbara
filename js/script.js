let obj_Alex = {
    name: 'Alex',
    money: 10000,
    account: 7777,
}
let obj_Barbara = {
    name: 'Barbara',
    money: 5000,
    account: 2222,
}
let you_name = prompt('Как вас зовут?')





if(you_name == obj_Alex.name){
    let account_number = +prompt('Номер счета?')
    if(account_number == obj_Alex.account){
        let cash_out = +prompt('Сколько обналичить?')
        let ostatok = obj_Alex.money - cash_out
        if(cash_out <= obj_Alex.money){
            alert('Операция прошла успешно')
            console.log(`С вашего счета снято ${cash_out}`);
            console.log(`Остаток на балансе = ${ostatok}`);
        }else if(cash_out > obj_Alex.money){
            alert('Недостаточно средств')
            console.log(`На балансе не хватает ${ostatok}`);
        }else{
            alert('Введите сумму')
        }
    }else{
        alert('Напишите свой номер счёта')
    }
}else if(you_name == obj_Barbara.name){
    let account_number = +prompt('Номер счета?')
    if(account_number == obj_Barbara.account){
        let cash_out = +prompt('Сколько обналичить?')
        let ostatok = obj_Barbara.money - cash_out
        if(cash_out <= obj_Barbara.money){
            alert('Операция прошла успешно')
            console.log(`С вашего счета снято = ${cash_out}`);
            console.log(`Остаток на балансе ${ostatok}`);
        }else if(cash_out > obj_Barbara.money){
            alert('Недостаточно средств')
            console.log(`На балансе не хватает ${ostatok}`);
        }else{
            alert('Введите сумму')
        }
    }else{
        alert('Напишите свой номер счёта')
    }
}else{
    alert('Пользователь не найден, досвидуси')
}






// let obj = {
//     name: "jakhongir",
//     age: "20",
//     is_married: false,
//     computer: {
//         color: "grey",
//         mark: "asus",
//         nvidia: 1650
//     }
// }


// let name = prompt('Имя')
// let fami = prompt('Фамилия')
// let old = +prompt('Возрост')
// let obj = {
//     name: name = name,
//     age: age = fami,
//     old: old,
// }
// console.log(obj);


// let modal = +prompt('Проверка число на целостность') //надпись уловия в 'promot'
// let modal_ver = Math.ceil(modal)
// let modal_niz = Math.floor(modal)

// if(modal_ver == modal){
//     console.log('целое');
// }else{
//     console.log('дробное');
// }






// let floor = Math.floor(round_number)// округление вниз
// let ceil = Math.ceil(round_number)// округление вверх










// let p = 4
// let fake_p = 6


// if(p == 6, p == 4, p == 10){
//     console.log('perfect');
// }else{
//     console.log('not currect');
// }


// //4-задание
// let num_3 = "O.34"
// let num_4 = parseFloat(num_3)//просто переводит число
// let num_5 = typeof(num_4)//проверка

// console.log(num_5);
// if(num_5 == 'string'){//если 'num_4' равен 'string' то выйдет надпись 'перфект'
//     console.log('перфект');
// }else if(num_5 == 'number'){//если 'num_4' равен 'number' то выйдет надпись 'weel'
//     console.log('weel');
// }else{//если ни что не получится то выйдет просто 'bad'
//     console.log('bad');
// }

// let name = prompt('Введите слово или цыфры').trim()//модальное окно
// let com = ".com"
// let big_letter_Name = name[0].toLocaleUpperCase() + name.slice(1)//это действие первую букву озогловляет


// console.log(big_letter_Name + com);//к концу слова или цифер прибавляет ".com"
