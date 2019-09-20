export class Task {
    public id: number;
    public title: string;
    public content: string;
    public startDate: Date;
    public deadline: Date;
    public priority: number;
    public status: string;

    constructor(title: string,
                content: string,
                startDate: Date,
                deadline: Date,
                priority: number,
                status: string) {
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.deadline = deadline;
        this.priority = priority;
        this.status = status;
    }    
}