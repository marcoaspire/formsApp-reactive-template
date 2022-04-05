import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild(
    'myForm'
  ) myForm!:NgForm

    initForm = {
      name: "something",
      price: 150,
      stock: 10
    }


  constructor() { }

  ngOnInit(): void {
  }

  validateName():boolean{
    return this.myForm?.form.controls['product']?.invalid && this.myForm?.form.controls['product']?.touched
  }

  validatePrice():boolean{
    return this.myForm?.form.controls['price']?.touched && this.myForm?.form.controls['price']?.value  <= 0;
  }
  

  save(){
    //console.log(this.myForm);
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
