import { useRouter } from "next/navigation";
import { setCookie } from "@/service/cookies";
import { useState } from "react";
import { LoginService } from "@/service/login";
import { type IErrorForm, type IFormLogin } from "@/ts/interface";

export const useLogin = (response: IFormLogin) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IErrorForm>();

  const router = useRouter();

  const onSubmit = async (loginWithGoogle = false) => {
    event?.preventDefault();

    setLoading(true);

    const responseRegisterService = await LoginService(response, loginWithGoogle);
    setError(responseRegisterService.error);

    if(responseRegisterService.status && responseRegisterService.data){
      setCookie(responseRegisterService.data);    
      router.push('/dashboard');
    }

    setLoading(false)
  }

  return { error, loading, onSubmit };
};