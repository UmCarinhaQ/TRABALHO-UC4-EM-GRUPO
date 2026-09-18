import { Character } from "../Character/Character"

export class Item {
   private keys: number

   public constructor(keys: number) {
      this.keys = 0
   }

   public healthPotion(character: Character) {
      character.setHealth(character.getHealth() + 50)
      console.log(`vida atual: ${character.getHealth()}`)
   }

   public ironSword(character: Character) {
      character.setAttack(character.getAttack() + 5)
      console.log(`Ataque aumentou em + 5 `)
   }

   public leatherArmor(character: Character) {
      character.setDefense(character.getDefense() + 3)
      console.log(`a defesa aumentou em + 3`)
   }

   public ancientKey() {
      this.keys++
      console.clear()
      console.log(`Quantidade atual de chaves: ${this.keys} `)
   }

   public removeKey() {
      this.keys--
      console.clear()
      console.log(`Quantidade atual de chaves: ${this.keys} `)
   }

}