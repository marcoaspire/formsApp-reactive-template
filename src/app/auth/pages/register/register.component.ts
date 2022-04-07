import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { fullNamePattern, usernameCannotBeMarco } from '../../../shared/validator/validations';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


 


  myForm:FormGroup= this.fb.group({
    name        :['',[Validators.required, Validators.pattern(this.validatorService.fullNamePattern) ]],
    email       :['', [Validators.required,Validators.email], [this.emailValidator]],
    username    :['', [Validators.required ,usernameCannotBeMarco]  ],
    password    :['', [Validators.required, Validators.minLength(6) ]],
    confirmPass :['', [Validators.required]],


  },{
    validators: [ this.validatorService.matchFields('password','confirmPass')]
  })

  get emailErrorMsg():string{
     const errors = this.myForm.get('email')?.errors;
     if (errors?.['required'])
        return "Email is required";
     else if (errors?.['email'])
        return "Email pattern";
      else if (errors?.['emailTaken'])
        return "Email has taken";

        return '';



  }


  constructor(private fb:FormBuilder,
              private validatorService:ValidatorService,
              private emailValidator: EmailValidatorService

    ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: "Marco Pacheco",
      email: "test1@test.com",
      username: "ocram",
      password:"123456",
      confirmPass:"123456",

    })
  }

  isValid(field:string){
    return this.myForm.controls[field].errors &&  this.myForm.controls[field].touched;
  }

  // emailRequired(){
  //   return this.myForm.get('email')?.errors?.['required']; 
  // }

  // emailPattern(){
  //   return this.myForm.get('email')?.errors?.['email']; 
  // }
  // emailTaken(){
  //   return this.myForm.get('email')?.errors?.['emailTaken']; 
  // }

  submitForm(){
    console.log( this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
