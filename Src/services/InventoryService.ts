import { Item } from "../models/Item/Item";

export class InvertoryService {
    private items: Item[] = [];
    private gold: number = 50;


    constructor(items: Item[], gold: number) {
        this.items = items;
        this.gold = gold;
    }

    public getItems(): Item[] {
        return this.items;
    }

    public getGold(): number {
        return this.gold;
    }

    public setItems(value: Item[]) {
        this.items = value;
    }

    public setGold(value: number) {
        this.gold = value;
    }


    public addItem(item: Item): void {
        this.items.push(item);
    }

    public removeItem(item: Item): void {
        const position = this.items.indexOf(item);

        if (position != -1) {
            this.items.splice(position, 1);
        }
    }

    public listItems(): void {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
        }
    }

    public hasItem(item: Item): boolean {
        if (this.items.indexOf(item) != -1) {
            return true;
        } else {
            return false;
        }
    }

    public useItem(item: Item): void {
        if (this.hasItem(item)) {
            console.log("You are adding items" + item)
            this.removeItem(item)
        } else {
            console.log("This item doesn't exist, you idiot.")
        }
    }

    public equipItem(item: Item): void {
        if (this.hasItem(item)) {
            console.log("Item equipped" + item)
        } else {
            console.log("Item not foud!!")
        }
    }

}