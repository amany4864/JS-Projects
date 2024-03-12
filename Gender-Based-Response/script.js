function sayGoodMorning() {
    var name = document.getElementById('nameInput').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var greetingElement = document.getElementById('greeting');
    
    if (gender === 'male') {
        greetingElement.textContent = `Ram Ram Bhai, \n${name} bhai ka swagat hai`;
    } else if (gender === 'female') {
        greetingElement.textContent = `Aur Cutie Kaisi ho,  XYZ Ye lo number, message krna `;
    } 
}

function reset() {
    document.getElementById('nameInput').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    var greetingElement = document.getElementById('greeting');
    greetingElement.textContent = '';
}
