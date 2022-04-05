import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  

  myForm:FormGroup = this.fb.group({
    sex: ['M',Validators.required],
    notifications:[true,Validators.required],
    conditions: [false,Validators.requiredTrue]
  });

  person = {
    sex: 'F',
    notifications: true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   this.myForm.reset({
     ...this.person,
     conditions:false
    });

    // this.myForm.get('conditions')?.valueChanges.subscribe( form => {
    //   console.log(form);
    // })
    // //if detect a change it will print it
     this.myForm.valueChanges.subscribe( ({conditions,...rest}) => {
      
       this.person=rest;
     });
  }

  save(){
    const formValue= {...this.myForm.value};
    delete formValue.conditions;

    this.person = formValue;
    console.log(formValue);
    
  }

}
