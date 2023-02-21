import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greater',
  templateUrl: './greater.component.html',
  styleUrls: ['./greater.component.css']
})
export class GreaterComponent {
  @Input() greater = "Fred"
  @Input() favoriteNumber : number = 7

  showStory: boolean = false;
 buttonText: string = "Show";


 toggleStory(): void{
  this.showStory = !this.showStory;
  if (this.showStory) {
    this.buttonText = "Hide";
  }
  else
  {
    this.buttonText = "Show";
  }
}

}
 