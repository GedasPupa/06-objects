"use strict";

const calculator = {
    sum: function() {
        return this.numb1 + this.numb2;
    },
    substraction: function() {
        return this.numb1 - this.numb2;
    },
    multiplication: function() {
        return this.numb1 * this.numb2;
    },
    division: function() {
        return this.numb1 / this.numb2;
    },
    root: function() {
        return Math.sqrt(this.numb1);
    },
    residue: function() {
        return this.numb1 % this.numb2;
    },
    results: function() {
        return [
            this.sum(), this.substraction(), this.multiplication(), 
            this.division(), this.root(), this.residue()
        ];
    },
    average: function() {
        const suma = this.results();        
        return 'Vidurkis: ' + suma.reduce((acc, qurr) => acc+qurr) / suma.length;
    }
}

let objektuMasyvas = [];

for (let i=1; i<101; i++) {
    objektuMasyvas.push({
        id: i,
        vardas: `vardas${i}`
    })
};

console.log(objektuMasyvas);

document.getElementById('count').addEventListener('click', function() {
    calculator.numb1 = parseFloat(document.getElementById('input1').value);
    calculator.numb2 = parseFloat(document.getElementById('input2').value);
    console.log(calculator.results());
    console.log(calculator.average());
    const output = calculator.results();
    const output1 = calculator.average();
    document.getElementById('output').innerText = `[ ${output} ]`;
    document.getElementById('output1').innerText = output1;
    for (let i=0; i<objektuMasyvas.length; i++) {
        document.getElementById('output2').innerText += "{id: " + objektuMasyvas[i].id + ', vardas: ' + objektuMasyvas[i].vardas + "}" + '\r\n';
    }
});