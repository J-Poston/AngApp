import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent {
    dungeonName:string = "Narnia";
    monsters:string[] = ["Joker","Cassly","Goblin"];
    difficulty: string = "high";
    treasure: number = 0;

    changeDungeonName(form:NgForm){
      let dungeon = form.form.value.dungeon;
      this.dungeonName = dungeon;
    }


    showBoss:boolean = false;
    buttonText:string = "Show";
    toggleBoss():void{
      this.showBoss = !this.showBoss;
      if(this.showBoss){
        this.buttonText = "Show";
      }
      else {
        this.buttonText = "Hide";
      }
    }
}
