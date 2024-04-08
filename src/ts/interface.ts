export interface IFormRegister{
    name: string,
    email: string,
    password: string
}

export interface IFormLogin{
    email: string,
    password: string
}

export interface IForm extends IFormLogin {name?: string};

export interface IErrorForm{
    name?: string | boolean;
    email: string | boolean;
    password: string | boolean;
    google?: string | boolean;
}

