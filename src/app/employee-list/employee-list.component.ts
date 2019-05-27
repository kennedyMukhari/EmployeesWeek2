import { Component, OnInit } from '@angular/core';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title='Adding an employee';
  employees = [];

  model:any={};
  model2:any={};

  constructor() { 
    console.log("Hello World")
  }

  addEmployee(){
    this.employees.push(this.model);
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    console.log(i);
  }
  myValue;

  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position =this.employees[k].position;
    this.model2.cellphone =this.employees[k].cellphone;
    this.model2.email =this.employees[k].email;
    this.model2.cellphone =this.employees[k].cellphone;
    this.model2.bio =this.employees[k].bio;
    this.model2.gender = this.employees[k].gender;
    this.myValue = k;
  }
  
  updateEmployee(){
    let k = this.myValue;
    for(let i =0; i<this.employees.length;i++){
      if(i ==k){
        this.employees[i] =this.model2;
        this.model2 ={};
      }
    }
      
  }

  ngOnInit() {

  }

}
