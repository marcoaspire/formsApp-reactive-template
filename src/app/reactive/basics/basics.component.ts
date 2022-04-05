import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{
 

  // myForm:FormGroup = new FormGroup({
  //   'name' : new FormControl('Table'),
  //   'price': new FormControl(1000),
  //   'stock': new FormControl(5)
  // })

  //formBuilder
  myForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    price: [,[ Validators.required,Validators.min(0)] ],
    stock: [,[ Validators.required,Validators.min(0)]]
  });

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.myForm.reset({
      name:'Pencil',
      price: 10
    })
  }


  isValid(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save(){
    if (this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
    }
    else{
      this.myForm.reset();
      console.log(this.myForm.value);

    }
    
  }

}
