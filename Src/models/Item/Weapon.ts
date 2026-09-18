import { Equippable } from "../../interfaces/Equippable";
import { Character } from "../Character/Character";

export class Weapon implements Equippable {

    private name: string;
    private damage: number;
    private character: Character | null;

    public constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
        this.character = null;
    }

    public equip(character: Character): void {
        this.character = character;
        character.setWeapon(this);

        console.log(`${this.name} equipped by ${character.getName()}!`);
    }

    public unequip(character: Character): void {
        if (this.character === character) {
            character.setWeapon(null);
            this.character = null;

            console.log(`${this.name} unequipped from ${character.getName()}!`);
        }
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getDamage(): number {
        return this.damage;
    }

    public setDamage(newDamage: number): void {
        this.damage = newDamage;
    }
}