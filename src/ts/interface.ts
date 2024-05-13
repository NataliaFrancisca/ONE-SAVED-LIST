export interface IFormRegister{
    name: string,
    email: string,
    password: string
}

export interface IFormLogin{
    email: string,
    password: string
}

export interface IForm {
    name?: string,
    email: string,
    password: string
}

export interface IErrorForm{
    name?: string | boolean;
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean;
}

export interface IFormAuthType{
    REGISTER?: boolean,
    LOGIN?: boolean
}

export interface IUserInfo {
    email: string,
    displayName: string,
    photoURL: string
}
  
export interface IUserResource {
    title: string;
    link: string;
    type: string;
    image?: string;
}


