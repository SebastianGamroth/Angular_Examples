export class Animals {

    species: any = [
        {
            'group': 'Earth',
            'name': 'Monkey'
        },
        {
            'group': 'Air',
            'name': 'Bird'
        },
        {
            'group': 'Earth',
            'name': 'Cat'
        },
        {
            'group': 'Earth',
            'name': 'Dog'
        },
        {
            'group': 'Water',
            'name': 'Fish'
        }
    ];

    calculatePlus(a: number, b: number) {
        let c: number = a + b;
        return c;
    }
}