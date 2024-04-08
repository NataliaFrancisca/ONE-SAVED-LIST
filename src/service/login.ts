import { signIn, signInWithGoogle } from "@/firebase/auth/signin";
import { type IFormLogin } from "@/ts/interface";
import { validateForm } from "@/validation/form";

export async function LoginService(formResponse: IFormLogin, withGoogle = false){
  const { responseIsValid, responseValidationMessage } = validateForm(formResponse);

  if(responseIsValid || withGoogle){
    try{
      const firebaseResponse = withGoogle ? await signInWithGoogle() : await signIn(formResponse);

      if(firebaseResponse.data){
        console.log("YEAH! REGISTER WITH SUCCESS");

        return {
          status: true,
          data: firebaseResponse.data?.user,
          error: withGoogle ? {name: false, email: false, password: false} : responseValidationMessage
        }
      }

      else{
        // validate the errors that firebase show
        console.log("OH NO! REGISTER FAILED");
        const { responseValidationMessage } = validateForm(formResponse, firebaseResponse.message);

        return {
          status: false,
          error: responseValidationMessage
        }
      }
           
    }catch(error: unknown){
      console.log('ERROR', error);
    };
  }

  return {
    status: false,
    error: responseValidationMessage
  }
};