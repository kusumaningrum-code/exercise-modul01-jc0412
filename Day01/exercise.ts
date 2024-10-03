//1. length = 5, width = 3, output =15
const _length : number = 5;
const _width : number = 3;
const arearectangle : number = _length * _width;
console.log(arearectangle);

//2. length =5, width =3, output = 16
const panjang : number = 5;
const luas : number = 3
const kelilingrectangle : number = panjang + panjang + luas + luas;
console.log(kelilingrectangle);

//3. radius = 5, output: diameter = 10. circumference = 31.4159, area = 78.539
const radius : number = 5; //bisa pakai let karena nilai dpt diubah/reassign
const diameter : number = radius * 2; //lbh baik pakai const karena rumus tdk dpt diubah
console.log(diameter);
const circumference : number = 2*Math.PI*radius
console.log(circumference);
const area : number = Math.PI*Math.pow(radius, 2);
console.log(area);
const result0 : string = `Diameter = ${diameter}, circumference = ${circumference}, area = ${area}`;
console.log(result0);

//4. a = 80, b = 65
const sudutsegitiga: number = 180;
const sudut_a : number = 80;
const sudut_b : number = 65;
const sudut_c : number = sudutsegitiga - sudut_a - sudut_b;
console.log(sudut_c);

//5. 400 days --> 1 year 1 month 5 days. 366 days --> 1 year 0 month 1 day
const days1 : number = 400;
const year1 : number = Math.floor (days1/365);
console.log(year1);
const month1 : number = days1 - 365
const month11 : number = Math.floor (month1/30)
console.log(month11);
const dayss : number = days1 - 365;
console.log(dayss);

const days366 : number = 366;
const tahun : number = Math.floor (400/365);
console.log(tahun);
const bulan : number = days366-365
const bulan1: number= Math.floor (bulan/30)
console.log(bulan1);
const daysss: number = days366 - 365
console.log(daysss);


//6. 1 = 2022-01-20, 2 = 2022-01-22
const month2 : number = 1;
const month3: number = 1;
const tanggal2: number = 20;
const tanggal3: number = 22;
const month2to_days: number = month2 * 30;
console.log(month2to_days);
const month3to_days: number = month3 * 30;
console.log(month3to_days);
const days2: number = tanggal2 + month2to_days;
console.log(days2);
const days3 : number = tanggal3+ month3to_days;
console.log(days3);
const hasil: number = days3-days2;
console.log(hasil);