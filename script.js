const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const btn = document.getElementById('btn');
btn.addEventListener('click', insertPasswords);
const b1 = document.getElementById('one');
const b2 = document.getElementById('two');
function insertPasswords() {
    b1.textContent = getRandomPassword();
    b2.textContent = getRandomPassword();
}
function getRandomPassword() {
    let x = "";
    let n = characters.length;
    const len = 15;
    for (var i = 0; i <= len; i++) {
        let ind = Math.floor(Math.random() * n);
        x += characters[ind];
    }
    return x;
}