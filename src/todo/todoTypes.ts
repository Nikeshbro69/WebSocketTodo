
export enum Status{
    Completed = "Completed",
    Pending = "Pending"
}
export interface ITodo{
    task: string,
    deadline: string,
    status : Status

}