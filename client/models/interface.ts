export interface IBook{
    id:string,
    title:string,
    author:string,
    isbn10?:string,
    isbn13?:string,
    publisher?:string,
    publishedDate?:string,
    frequency?:number,
    category:string,
    number_Avaiable?:number;
    status?:number;
    oid?:string;
    imageUrl?:any;
    imageString:string;
    fileData:any;
    description?:string;
}

export interface IQuery{
    searchTerm:string
}

export interface IUser {
    id?: string;
    username: string;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    gender:number;
    roleNames:string[];
  }
  

export interface ILogin{
    userNameOrEmailAddress: string,
    password: string,
    remember:boolean,
    isLibrarian:boolean
}

export interface ICommentData{
    message?:string;
    rating?:number;
}

export interface IEvent{
    type?:string,
    content?:string
}

export interface ILoginResponse {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
    role: string;
  }

export interface ILesson{
    topic:string;
    noteUrl:string;
    videoUrl:string;
    homeworkUrl:string;
}



export interface ISubject{
  name:string;
  grade:string;
  tutor:IUser;
  lessons: ILesson[];
}