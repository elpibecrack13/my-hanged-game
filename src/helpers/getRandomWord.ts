let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'MAIAMI',
    'BOSTON',
    'CHICAGO',
    'LOSANGELES',
    'LEGO',
    'NIKE',
    'ADIDAS',
    'PUMA',
    'UNDERARMOUR'
];


export function getRandomWord(){

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
}       