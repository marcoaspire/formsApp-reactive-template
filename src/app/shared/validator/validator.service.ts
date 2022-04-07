import { Injectable } from '@angular/core';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public fullNamePattern:string ='([a-zA-Z]+) ([a-zA-Z]+)';

  constructor() { }

  usernameCannotBeMarco = (control:FormControl) =>{ 
    const value=control.value?.trim().toLowerCase();
    if (value === 'marco')
    {
      return{
        noMarco:true
      }
    }
    return null;
  }

  matchFields(field1:string,field2:string){
    return ( formGroup: AbstractControl): ValidationErrors | null => {
      const pass1= formGroup.get(field1)?.value;
      const pass2= formGroup.get(field2)?.value;

      console.log(pass1,pass2);
      
      if (pass1 !== pass2){
        formGroup.get(field2)?.setErrors({noMatch: true});
        return { noMatch: true }
      }
      formGroup.get(field2)?.setErrors(null);
      
      return null;
    };
  }

}
