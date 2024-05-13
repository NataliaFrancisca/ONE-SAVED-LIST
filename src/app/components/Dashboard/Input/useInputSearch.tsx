import { useInputValue, useToggleInput } from "@/hooks/useRedux";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export const useInputSearch = () => {
  const [inputSearchValue, setInputSearchValue] = useState<undefined | string>(undefined);
  
  const { onToggleInput } = useToggleInput();
  const { onUpdateInputValue } = useInputValue()

  const router = useRouter();

  const onSubmit = () => {
    event?.preventDefault();

    if(inputSearchValue){
      onUpdateInputValue(inputSearchValue.toUpperCase())
    }

    router.push('/dashboard');
  }

  const onCloseInputSearch = () => {
    event?.preventDefault();
    onToggleInput();
    onUpdateInputValue('');
    router.push('/dashboard');
  }

  return { inputSearchValue, setInputSearchValue, onSubmit, onCloseInputSearch }
}