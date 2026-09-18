export interface Combatant {
    attack(target: Combatant): number;
    takeDamage(amount: number): void;
    isAlive(): boolean;
}