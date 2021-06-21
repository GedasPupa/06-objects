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
        let divas = document.createElement('div');
        divas.innerText = "{id: " + objektuMasyvas[i].id + ', vardas: ' + objektuMasyvas[i].vardas + "}";
        if ((i+1) % 2 == 0) {
            divas.style.backgroundColor = "lightblue";
        }
        document.getElementById('output2').append(divas);
    }
});

const rectangle = {
    area: function() {
        return this.top * this.left;
    },
    perimeter: function() {
        return this.top * 2 + this.left * 2;
    },
    diagonal: function() {
        return Math.sqrt(this.top**2 + this.left**2);
    }
}

document.getElementById('count2').addEventListener('click', function() {
    rectangle.top = parseFloat(document.getElementById('input3').value);
    rectangle.left = parseFloat(document.getElementById('input4').value);
    document.getElementById('pText').innerText = 
        'Plotas: ' + rectangle.area() + '\r\n' +
        'Perimetras: ' + rectangle.perimeter() + '\r\n' +
        'Įžambinė: ' + rectangle.diagonal();
    let staciakampis = document.createElement('div');
    staciakampis.style.width = `${rectangle.top}px`;
    staciakampis.style.height = `${rectangle.left}px`;
    staciakampis.style.border = "2px solid green";
    document.getElementsByTagName("body")[0].append(staciakampis);
})