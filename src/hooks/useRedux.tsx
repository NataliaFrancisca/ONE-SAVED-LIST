import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/lib/features/inputToggle/inputToggle";
import { updateInputSearchValue } from "@/lib/features/inputSearchValue/inputSearchValue";
import { updateUserContent } from "@/lib/features/userContent/userContent";
import { type IFormContent } from "@/ts/interface";

export const useToggleInput = () => {
  const toggleInput = useSelector((state: {toggle: {value: boolean}}) => state.toggle.value);
  const dispatch = useDispatch();

  const onToggleInput = () => {
    dispatch(toggle())
  }

  return {toggleInput, onToggleInput }
}

export const useInputValue = () => {
  const inputValue = useSelector((state: {inputSearchValue: {value: string}}) => state.inputSearchValue.value);
  const dispatch = useDispatch();

  const onUpdateInputValue = (value: string) => {
    dispatch(updateInputSearchValue(value));
  }

  return { inputValue, onUpdateInputValue}
}

export const useUserContent = () => {
  const userContent = useSelector((state: {userContent: {value: IFormContent[]}}) => state.userContent.value);
  const dispatch = useDispatch();

  const onUpdateUserContent = (value: IFormContent[]) => {
    dispatch(updateUserContent(value));
  }

  return { userContent, onUpdateUserContent }
}