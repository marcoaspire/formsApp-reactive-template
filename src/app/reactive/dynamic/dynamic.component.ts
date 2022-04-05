import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent {
   myForm:FormGroup = this.fb.group({
     name: ['',[Validators.required,Validators.minLength(3)]],
     favorites : this.fb.array( 
       [
          ['Fifa',Validators.required ],
          ['Mario',Validators.required]
     ], Validators.required )
   });

   newFavorite:FormControl = this.fb.control('',Validators.required);

   get favoritesArr(){
     return this.myForm.get('favorites')as FormArray;
   }

  constructor(private fb: FormBuilder) { }

  isValid(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save(){
    
    if (this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
    }
    else{
      console.log(this.myForm.value);
      
    }
  }
  addFavorite(){
    if (this.newFavorite.invalid){

    }
    else{
      this.favoritesArr.push(this.fb.control ( this.newFavorite.value, Validators.required) );
      //this.favoritesArr.push(new FormControl (this.newFavorite.value, Validators.required) );
      this.newFavorite.reset();
    }
  }

  delete(index:number){
    this.favoritesArr.removeAt(index);
    
  }
}
