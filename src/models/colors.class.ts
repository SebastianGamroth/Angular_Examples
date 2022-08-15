export class Colors {

    id: string;
    firstColor: string;
    secondColor: string;
    timeStemp: any;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstColor = obj ? obj.firstColor : '';
        this.secondColor = obj ? obj.secondColor : '';
        this.timeStemp = obj ? obj.timeStemp : '';
    }


    public toJSON() {
        return {
            id: this.id,
            firstColor: this.firstColor,
            secondColor: this.secondColor,
            timeStemp: this.timeStemp
        }
    }
}