import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greater',
  templateUrl: './greater.component.html',
  styleUrls: ['./greater.component.css']
})
export class GreaterComponent {
  @Input() greater = "Fred"
  @Input() favoriteNumber : number = 7
}
 