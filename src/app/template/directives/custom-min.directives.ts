import { Directive, Input } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[customMin][ngModel]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:CustomMinDirective,
        multi:true
    }]
})
export class CustomMinDirective implements Validator{
    @Input() min!:number;
    
    constructor(){
        console.log("entre"+this.min);
        
    }
    validate( control: FormControl){
        const inputValue= control.value;
        console.log('min', this.min);
        return (inputValue < this.min) ? { 'customMin':true} : null;
    }
}