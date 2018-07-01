const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '7895123';
let login = prompt('Введите логин:');
if ( login == null) {

    alert('Отменено пользователем')
}
else if ( login !== ADMIN_LOGIN) {
    alert('Доступ запрещен!');
}
else if (login == ADMIN_LOGIN) {
    let pass = prompt('Введите пароль:');

    if (pass == null) {
        alert('Отменено пользователем');
    }
    else if (pass !== ADMIN_PASSWORD) {
        alert('Доступ запрещен!');
    }
    else if (pass == ADMIN_PASSWORD)
    {
        alert('Добро пожаловать!');

    }
}
