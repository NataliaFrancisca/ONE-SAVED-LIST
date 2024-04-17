import { signIn, signInWithGoogle } from "../firebase/auth/signin";
import { signUp } from "../firebase/auth/singup";
import { type IFormRegister, type IForm, type IFormAuthType } from "../ts/interface";
import { validateForm } from "../validation/form";

export async function FormAuthService(formResponse: IForm, withGoogle = false, type: IFormAuthType){
  const { responseIsValid, responseValidationMessage } = validateForm(formResponse);

  if(responseIsValid || withGoogle){
    try{
      const firebaseResponse = await getAuthService(formResponse, withGoogle, type);
    
      if(firebaseResponse.data){
        console.log("YEAH! REGISTER WITH SUCCESS");
        
        return {
          status: true,
          data: firebaseResponse.data.user,
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
    }
  }

  return {
    status: false,
    error: responseValidationMessage
  }
}

export async function getAuthService(formResponse: IForm, withGoogle = false, type: IFormAuthType){
  
  if(withGoogle){
    return await signInWithGoogle()
  }

  return type.LOGIN ? await signIn(formResponse) : await signUp(formResponse as IFormRegister);
}