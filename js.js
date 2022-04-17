const a = prompt('Введите пароль');
const b = prompt('Введите пароль ещё раз');
let c = a==b;
switch (c){
	case true :{
	console.log('сохранили');
    break;
	};
    default :{
        console.log('ytn');
        break;
    }
};