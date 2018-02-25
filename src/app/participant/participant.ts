export class Participant {
    public _id?: string;
    public age?: number;
    public gender?: string;
    public ip?: string;
    public isComplete?: boolean;
    public mturkCode?: string;
    public name?: string;
    public answers?: string;
    public numCorrect?: number;
    public payoff?: number;
    public actualProportion?: number[];
    public endowment?: number[];
    public netGains?: number[];
    public opponentNumber?: number[];
    public proportion?: number[];
    public reactionTime?: number[];
    public returned?: number[];
    public endowmentlt?: number[];
    public actualProportionlt?: number[];
    public proportionlt?: number[];
    public netGainslt?: number[];
    public opponent2Number?: number[];
    public reactionTimelt?: number[];
    public returnedlt?: number[];

    constructor (
        name?: string,
        age?: number,
        gender?: string,
        ip?: string,
        isComplete?: boolean,
        answers?: string
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.ip = ip;
        this.isComplete = isComplete;
        this.answers = answers;
    }

}
