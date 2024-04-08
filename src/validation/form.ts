import { type IForm } from "@/ts/interface";
import { validateInputEmail, validateInputName, validateInputPassword } from "./input";

export function validateForm(request: IForm, firebase?: string){
  const { email, password } = request;

  const responseValidationMessage = {
    name: request.name ? validateInputName(request.name) : false,
    email: validateInputEmail(email, firebase),
    password: validateInputPassword(password, firebase)
  }

  const responseIsValid = Object.values(responseValidationMessage).every((value) => value === false);
  return { responseIsValid, responseValidationMessage }
}