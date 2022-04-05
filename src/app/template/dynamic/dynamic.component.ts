import { Component, OnInit, ViewChild } from '@angular/core';

interface Person{
  name:string;
  favorites: Favorite[];
}

interface Favorite{
  id: number;
  name:string
}


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent{
  newGame: string ='';
  person:Person = {
    name: "Marco",
    favorites: [
      {
      id:1,
      name:"Super Mario"
      },
      {
        id:2,
        name:"Fifa"
      },
        
    ]
  }
  save(){
   // console.log(this.name);
    
  }

  validateName():boolean{
    return true;
  }

  
  delete(index:number){
    this.person.favorites.splice(index,1);
  }

  addGame(){
    const newFav: Favorite={
      id : this.person.favorites.length+1,
      name : this.newGame
    }
    this.person.favorites.push({...newFav});
    this.newGame='';
  }

}
