export class Question{
    public id:number;
    public text:string = '';
    public correctAnswer:string = '';
    public wrongAnswer1:string= '';
    public wrongAnswer2:string= '';
    public wrongAnswer3:string= '';
    public quizID:number;
    public answers?:any[] = [];
    public selectedAnswer?:any;
    
}
export class Quiz{
    public id:number;
    public title:string = '';    
}

