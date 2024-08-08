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
    const temp = [];
    let i = 0; 
    while (i < expr.length){
        const bit10 = (expr.slice(i, i+10));
        let letterCode = '';
        for (let j = 0; j*2 < bit10.length; j++){
            const dotDash = bit10.slice(j*2, j*2+2);
            if (dotDash == '10'){
                letterCode += '.';
            } else if (dotDash == '11'){
                letterCode += '-';
            } else if (dotDash == '**'){
                letterCode += ' ';
                break;
            }
        }
        temp.push(MORSE_TABLE[letterCode]);
        i += 10;
    }
    return temp.join('');
}

module.exports = {
    decode
}