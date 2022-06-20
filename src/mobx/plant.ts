import { makeAutoObservable } from "mobx";
import { Plant } from "../datebase/data";

export class PlantMB {
   constructor() {
      makeAutoObservable(this)
   }
   position: number = 0
   list: Plant[] = []
   setList(list: Plant[]) {
      this.list = list.map((v, k) => {
         return {
            ...v,
            position: k + 1,
            source: { uri: `https:${v.file_url}` }
         }
      })
   }
   setPosition() {
      if (this.list.length === this.position + 1)
         return this.position = 0
      this.position = this.position + 1
   }

   get getRandom() {
      const ind = Math.floor(Math.random() * 10)
      return this.list[ind].name
   }
}