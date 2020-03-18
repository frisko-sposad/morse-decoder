const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    let arr2 = [];
    let str = "";
    let arr3 = [];
    let res = "";
    
    
    
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == "**********") { arr[i] = " ";}
      str  = arr[i];
     
          
      arr2 = str.match(/.{1,2}/g);   
        
        for (let i = 0; i<arr2.length; i++) {
          if (arr2[i] == "00") { arr2[i] = ""; }
          if (arr2[i] == "10") { arr2[i] = "."; }
          if (arr2[i] == "11") { arr2[i] = "-"; }  
          if (arr2[i] == " ") { arr2[i] = " "; }
        }
        arr3.push(arr2.join(''));     
    }
     
     for (let i = 0; i<arr3.length; i++) {
    
     
     res = res + MORSE_TABLE[arr3[i]];
      
    }
return res;
}

module.exports = {
    decode
}