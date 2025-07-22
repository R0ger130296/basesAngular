import { Component, Signal, signal } from '@angular/core';

interface Character {
  id: number,
  name: String,
  power: number
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})


export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(2000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Krillin', power: 8000 },
    { id: 3, name: 'Vegeta', power: 300 },
  ]);


  changeSingalName(newName: string) {
    this.name.set(newName);
  }

  changeSingalPower(newPower: string) {

    this.power.set(parseInt(newPower));
  }

  addCharacter() {

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    // Actulizar la lista de personajes (Forma Recomendada)
    this.characters.update((list) => [...list, newCharacter]);
  }
}
