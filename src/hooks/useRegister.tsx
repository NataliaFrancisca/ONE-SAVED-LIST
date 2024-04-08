import { type IErrorForm, type IFormRegister } from "@/ts/interface";
import { useState } from "react";
import { RegisterService } from "@/service/register";
import { setCookie } from "@/service/cookies";
import { useRouter } from "next/navigation";

export const useRegister = (response: IFormRegister) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IErrorForm>();

  const router = useRouter();

  const onSubmit = async (registerWithGoogle = false) => {
    event?.preventDefault();

    setLoading(true);

    const responseRegisterService = await RegisterService(response, registerWithGoogle);
    setError(responseRegisterService.error);

    if(responseRegisterService.status && responseRegisterService.data){
      setCookie(responseRegisterService.data);    
      router.push('/dashboard');
    }

    setLoading(false)
  }

  return { error, loading, onSubmit };
}