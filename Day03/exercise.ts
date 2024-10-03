let input = 9;
let render = ""
for (let i = 1; i < 11; i++){
    render += input + "x" + i + "=" + (input * i) + " ";
}
console.log(render);

//soal 2
let _str = "madam";
let isPalindrome = true;
for (let i = 0; i < _str.length / 2; i++) {
    if (_str[i] !== _str[_str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(_str + " is a palindrome.");
} else {
    console.log(_str + " is not a palindrome.");
}

//soal 3
let cm = 100000;
let km = cm / 100000;
console.log(cm + " cm is " + km + " km.");

//soal 4
let number = 1000; 
let currency = number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
console.log(currency);

//soal 5
let katakata = "Hello World";
let katakata1 = katakata.replace("ell", "")
console.log(katakata1);


//soal 6
let kata = "hello world"; 
let hurufBesar = ""; 
let awalKata = true; 

for (let i = 0; i < kata.length; i++) {
    let karakterSaatIni = kata[i];
    
    if (karakterSaatIni === " ") {
        hurufBesar += karakterSaatIni; 
        awalKata = true; 
    } else {
        if (awalKata) {
            hurufBesar += karakterSaatIni.toUpperCase(); 
            awalKata = false; 
        } else {
            hurufBesar += karakterSaatIni;
        }
    }
}
console.log(hurufBesar);


//soal 7
let words = "The QuiCk BrOwN Fox";
let ganti = "";

for (let i = 0; i < words.length; i++) {
    let karakter = words[i];

    if (karakter === karakter.toUpperCase()) {
        ganti += karakter.toLowerCase();
    } else {
        ganti += karakter.toUpperCase(); 
    }
}

console.log(ganti);

//soal 8
let no1 = 42; 
let no2 = 27; 
let lbhBesar;
if (no1 > no2) {
    lbhBesar = no1;
} else {
    lbhBesar = no2;
}

console.log(lbhBesar); 

//soal 9
let num1 = 42; 
let num2 = 27; 
let num3 = 18; 
let nomorUrut = " "; 
if (num1 <= num2 && num1 <= num3) {
    nomorUrut += num1 + ", ";
    if (num2 <= num3) {
        nomorUrut += num2 + ", " + num3; 
    } else {
        nomorUrut += num3 + ", " + num2;
    }
} else if (num2 <= num1 && num2 <= num3) {
    nomorUrut += num2 + ", ";
    if (num1 <= num3) {
        nomorUrut += num1 + ", " + num3; 
    } else {
        nomorUrut += num3 + ", " + num1; 
    }
} else {
    nomorUrut += num3 + ", ";
    if (num1 <= num2) {
        nomorUrut += num1 + ", " + num2; 
    } else {
        nomorUrut += num2 + ", " + num1; 
    }
}
console.log(nomorUrut); 

//soal 10
let word = "hello";
let output;
if (typeof word === "string") {
    output = 1;
} else if (typeof word === "number") {
    output = 2;
} else {
    output = 3;
}
console.log(output);

//soal 11
let kalimat = "An apple a day keeps the doctor away"; 
let hasilKalimat = ""; 
for (let i = 0; i < kalimat.length; i++) {
    let currentChar = kalimat[i];
    if (currentChar === "a" || currentChar === "A") {
        hasilKalimat += "*";
    } else {
        hasilKalimat += currentChar;
    }
}
console.log(hasilKalimat); 


