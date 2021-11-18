export class Blog {

    userId: number;
    id: number;
    title: string;
    body:string;
    name: string;
    website: string;
    company: any;
    email: string;
    url: string;
    thumbnailUrl: string;
    completed: boolean

    constructor(userId:number, id:number, title:string, body:string, name:string,
        website:string, company:any, email:string, url:string, thumbnailUrl:string,
        completed:boolean){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    this.name = name;
    this.website = website;
    this.company = company;
    this.email = email;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
    this.completed = completed


    }
}