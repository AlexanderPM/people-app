interface IPeopleModel {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}
export class PeopleModel implements IPeopleModel {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;

    constructor(params: any = {}) {
        this.name = params.name;
        this.height = params.height;
        this.mass = params.mass;
        this.hair_color = params.hair_color;
        this.skin_color = params.skin_color;
        this.eye_color = params.eye_color;
        this.birth_year = params.birth_year;
        this.gender = params.gender;
        this.homeworld = params.homeworld;
        this.films = params.films;
        this.species = params.species;
        this.vehicles = params.vehicles;
        this.starships = params.starships;
        this.created = params.created;
        this.edited = params.edited;
        this.url = params.url;
    }
}
