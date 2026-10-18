let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let uppercase = document.getElementById('Uppercase');
let lowercase = document.getElementById('lowercase');
let numberBox = document.getElementById('Numbers');
let symbolBox = document.getElementById('Symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

//showing  input slider value

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;

});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "0123456789";
let Symbols = "!~@#$%^&*";


// Function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerchars : "";
    allChars += numberBox.checked ? Numbers : "";
    allChars += symbolBox.checked ? Symbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length>=1){
            navigator.clipboard.writeText(passBox.value);
            copyIcon.innerText = "check";
            copyIcon.title = "Password Copied";

            setTimeout(()=>{
                copyIcon.innerHTML = "content_copy";
                copyIcon.title = "";
            },2000)
    }
});
