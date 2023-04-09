const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');
const output3 = document.querySelector('#output3');

function convert() {
    convert1();
    convert2();
    convert3();








}
const convert1 = () => {
    
    
    if (input1.value!='') {
      
        let degC = input1.value
        let degF = 1.8 * degC + 32;
        output1.value = degF;

    }
    else if (output1.value) {
        let degf = output1.value
        let degc = (5/9)*(degf - 32);
        

        input1.value = degc;

    }

}
const convert2 = () => {
    if (input2.value) {
        let degC2 = input2.value;
        let k = degC2 + 273.15;
        output2.value = k;

    }
    else if (output2.value) {

        let k = output2.value;
        let ktoc = k - 273.15;
        input2.value = ktoc;
    }

}
const convert3 = () => {

    if (input3.value) {
        let k2 = input3.value;
        let ktof = 1.8 * (k2 - 273) + 32;
        output3.value = ktof;

    }
    else if (output3.value) {
        let f = output3.value;
        let ftok = (5 / 9)*(f - 32) + 273;
        input3.value = ftok;


    }

}
