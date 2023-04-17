import { PeopleModel } from "~/model/PeopleModel";

interface IPeopleResponseModel {
    count: number,
    next: string,
    previous: null | any,
    results: PeopleModel[]
}

export class PeopleResponseModel implements IPeopleResponseModel {
    count: number;
    next: string;
    previous: null | any;
    results: PeopleModel[];

    constructor(params: any = {}) {
        this.count = params.count;
        this.next = params.next;
        this.previous = params.previous;
        this.results = params.results;
    }
}
