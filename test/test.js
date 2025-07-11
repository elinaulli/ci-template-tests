import healthyToHero, { matchersHealth } from "../src/app.js";

test('healthyToHero test to healfy', () => {
    const hero = {
        name: 'Маг', 
        health: 90
    };
   const result = healthyToHero(hero);
    expect(result).toBe('healfy');


} )
test('healthyToHero test to wounded', () => {
    const hero = {
        name: 'Маг', 
        health: 30
    };
   const result = healthyToHero(hero);
    expect(result).toBe('wounded');


} )
test('healthyToHero test to critical', () => {
    const hero = {
        name: 'Маг', 
        health: 8
    };
   const result = healthyToHero(hero);
    expect(result).toBe('critical');

} )

test ('matches test', () =>{
    const arrayHerous = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
    const arrayHerousSort = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
    const result = matchersHealth(arrayHerous);
    expect(result).toEqual(arrayHerousSort);
}
)
