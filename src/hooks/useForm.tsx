import { setCookie } from '../service/cookies';
import { FormAuthService } from '../service/form';
import { type IForm, type IErrorForm, type IFormRegister, type IFormAuthType, type IUserInfo} from "@/ts/interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useForm = (response: IForm, type: IFormAuthType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IErrorForm>();

  const router = useRouter();

  const onSubmit = async(submitWithGoogle = false) => {
    event?.preventDefault();

    setLoading(true);

    const responseService = type.LOGIN 
      ? await FormAuthService(response, submitWithGoogle, {LOGIN: true}) 
      : await FormAuthService(response as IFormRegister, submitWithGoogle, {REGISTER: true});
    
    setError(responseService.error);

    if(responseService.status && responseService.data){
      setCookie(responseService.data as IUserInfo);
      router.push('/dashboard');
    }

    setLoading(false);
  }

  return { error, loading, onSubmit }
}