export default function healthyToHero(hero){
    let result = '';
    if (hero.health > 50){
        result = 'healfy';
    } else if (hero.health < 50 && hero.health > 15 ){
        result = 'wounded';
    } else if(hero.health < 15) {
        result = 'critical';
    } 
    return result;
}

export function matchersHealth(arrayHerous){
    let sortedArray = arrayHerous.sort((a,b) => b.health - a.health);
    return sortedArray;
}