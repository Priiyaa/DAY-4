let encryptBtn = document.getElementById('encrypt-btn');
let einput=document.getElementById('encryptedinput1');
let pinput=document.getElementById('plaininput1');
let inputs =[einput,pinput];
let copybtn = document.getElementById('copytoclipboard');

inputs.forEach(input => {

input.oninput=()=>{
    input.value=input.value.toUpperCase();
}
})

function encrypt(){
    let pinput= document.getElementById('plaininput1').value;
    let solved = ''
    let shiftinput= parseInt(document.getElementById('shiftinput').value)
    for(var i=0; i<pinput.length;i++){
        let ascii_num = pinput[i].charCodeAt()
        let sum = ascii_num + shiftinput
        sum>= 65 && sum <=90 ? solved += String.fromCharCode(sum) : sum>90 ? solved+= String.fromCharCode(65+(sum & 91)) : solved += pinput[i]
    }

einput.value = solved
    }
    function copyText(){
        einput.select()
        einput.setSelectionRange(0,999999)
        document.execCommand('copy')
        alert('Encrypted text is copied to clipboard :)')
    }
    copybtn.addEventListener('click',copyText)
    encryptBtn.addEventListener('click',encrypt)
