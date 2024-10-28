// Задание 2

const text = "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил."

const result = text.replaceAll( ";", ';\n');
const substring = result.replaceAll(" ", "" );
const newText = result.slice(28,50);
const replacedText = newText.replace (/клён/gi, 'дубе');
const replacedText2 = result.toUpperCase();
const replacedText3 = result.replace(/клён/gi, 'дуб');
const index = result.indexOf("моря");
const modifiedText = replacedText.charAt(0).toUpperCase() +  replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

// Задание 3

function generateWord (){

    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    // Максимум и минимум включаются
    }

    const letterOne = alphabet[getRandomIntInclusive (0, (alphabet.length-1))];
    const letterTwo = alphabet[getRandomIntInclusive (0, (alphabet.length-1))];
    const letterThree = alphabet[getRandomIntInclusive (0, (alphabet.length-1))];
    const letterFour = alphabet[getRandomIntInclusive (0, (alphabet.length-1))];

    const word = letterOne+letterTwo+letterThree+letterFour;

    const newWord = document.getElementById('random');
    newWord.textContent = word;
}

const btn = document.getElementById('btn');
btn.addEventListener ('click', generateWord);





