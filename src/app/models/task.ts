export class Task {
    id: number = 0;
    name?: string;
    done?: boolean;
    userId?: number;
    

    constructor() {
        this.id = 0;
        this.name = "";
    }
}