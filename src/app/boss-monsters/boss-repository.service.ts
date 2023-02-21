import { Injectable } from '@angular/core';
import { IBossMonster } from './interfaces/boss';

@Injectable({
  providedIn: 'root'
})
export class BossRepositoryService {

  constructor() { }

  bossList :IBossMonster[] =
     [
      {id: 1, name: "Boothstomper",healthPoints: 200, weakness: "fire"},
      {id: 2, name: "Drogfisher",healthPoints: 250, weakness: "water"},
      {id: 3, name: "Piranhaelli",healthPoints: 125, weakness: "cake"},
    ]
  getBossMonsters(): IBossMonster[] {
    return this.bossList;
  }

  getBossByIndex(index:number):IBossMonster{
    return this.bossList[index];
  }
}


