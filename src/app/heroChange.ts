import { Hero } from './hero';
import { Input, Output, EventEmitter } from '@angular/core';
export class HeroChange {
    storedHero: Hero;

    @Output()
    heroChange = new EventEmitter<Hero>();

    @Input()
    get hero() {
        return this.storedHero;
    }

    set hero(val) {
        this.storedHero = val;
        this.heroChange.emit(val);
    }
}
