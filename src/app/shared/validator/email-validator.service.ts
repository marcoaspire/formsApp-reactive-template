import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) { }


  validate(control:AbstractControl):Observable<ValidationErrors| null>  {
    console.log("entre");
    
    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
      .pipe(
        map(resp => {
          return (resp.length === 0) ? null : { emailTaken:true}
        })
      )
    ;
  }


  
}
