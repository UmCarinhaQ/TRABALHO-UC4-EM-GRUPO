import { Character } from "../models/Character/Character"; 
export interface Usable {
    use(target: Character): void;
}