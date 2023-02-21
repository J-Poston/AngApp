import { Component } from '@angular/core';
import { DndRepositoryService } from '../dnd-repository.service';

@Component({
  selector: 'app-character-class-list',
  templateUrl: './character-class-list.component.html',
  styleUrls: ['./character-class-list.component.css']
})
export class CharacterClassListComponent {

  constructor(private _repo: DndRepositoryService){

  }

  characterClasses: any;


  ngOnInit(): void {
    this._repo.getCharacterClasses().subscribe(
      (response) => {this.characterClasses = response;});
  }


}
