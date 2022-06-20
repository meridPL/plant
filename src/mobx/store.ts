import { makeAutoObservable } from "mobx";
import { PlantMB } from "./plant";

export class StoreMB {
   readonly plant: PlantMB
   constructor(){
      makeAutoObservable(this)
      this.plant = new PlantMB()
   }

}

export default new StoreMB()