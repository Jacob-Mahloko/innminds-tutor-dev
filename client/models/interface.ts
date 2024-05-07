

export interface IQuery{
    searchTerm:string
}

export interface IUser {
    id?: string;
    userName: string;
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
    content?:string,
    dueDate?:string
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
    notesUrl:string;
    videoUrl:string;
    homeworkUrl:string;
    dueDate:string;
    id?:string;
}



export interface ISubject{
  name:string;
  grade:string;
  tutor:IUser;
  lessons: ILesson[];
  id:string;
}

export interface IApplication{
    type: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    grade: string;
    subjectIds: string;
}

export interface IStudent{
    id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  username: string;
  password: string;
  email: string;
  profileImage: string;
  about: string;
  grade: string;
  subjectIds: string[];
}

export interface ITutor{
  id: string;
name: string;
surname: string;
phoneNumber: string;
username: string;
password: string;
email: string;
profileImage: string;
about: string;
grade: string;
subjectIds: string[];
}
export interface IRequest{
  id:string;
  reason:string;
  info:string;
  status:string;
}