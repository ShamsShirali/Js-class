"use strict";

class Company {
    constructor(companyN, fName) {
        this.companyN = companyN,
            this.fName = fName
    }

    employees = [
        [],
        []
    ]

    getData() {
        let data = this.employees;
        let inp1 = document.getElementById('inp1');
        let inp2 = document.getElementById('inp2');

        data[0].push(inp1.value);
        data[1].push(inp2.value);
    }

    employeeTable() {
        let data = this.employees;

        let tr = `<tr>
        <td>Name</td>
        <td>Position</td>
        </tr>`;

        for (let i = 0; i < data[0].length; i++) {

            if(data[0][i]!='' && data[1][i]!=''){
            tr += `<tr>
            <td>${data[0][i]}</td>
            <td>${data[1][i]}</td>
            </tr>`; //tr=tr+
            }
        }

        inp1.value='';
        inp2.value='';

        return tr;
    }
}

const a = new Company('Code Acdemy', '28may');
const b = new Company('Code Academy', 'Nizami');

let companyName = document.getElementById('companyName');
let filialName = document.getElementById('filialName');
let btn = document.getElementById('btn');
let form = document.getElementById('form');
let tbl = document.getElementById('tbl');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    a.getData();
    tbl.innerHTML = a.employeeTable();
})

companyName.innerHTML = a.companyN;
filialName.innerHTML = a.fName;