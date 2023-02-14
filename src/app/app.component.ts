import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngApp';
  components : string[] = ["Character","Gear","Monster","Dungeon"]
  userName :string = "John";

  changeTitle(newTitle:string):void{
    this.title=newTitle;
  }

  addName(form:NgForm){
    let newName = form.form.value.name;
    this.components.push(newName);
  }
  addUserName(form:NgForm){
    let name = form.form.value.name;
    this.userName = `, ${name}`;
  }

}
