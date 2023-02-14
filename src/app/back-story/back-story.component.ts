import { Component } from '@angular/core';

@Component({
  selector: 'app-back-story',
  templateUrl: './back-story.component.html',
  styleUrls: ['./back-story.component.css']
})
export class BackStoryComponent {
  homeTown: string = "Narnia";
  profession: string = "Farmer";
  birthday: string = "1/3/1989";
  lifeEvent: string = "Married";
  lifeEventDate: string = "2/13/2023";
}
