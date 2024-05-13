import { useSearchParams } from "next/navigation";
import { useInputValue } from "./useRedux";
import { useEffect, useState } from "react";
import { type IFormContent } from "@/ts/interface";
import { filterUsingFilterType, filterUsingSearchType } from "@/utils/filter";

export const useFetchFilter = (userBaseData: IFormContent[]) => {
  const [filterResponse, setFilterResponse] = useState<IFormContent[]>([]);

  const { inputValue } = useInputValue();

  const routerSearch = useSearchParams();
  const routerFilter = routerSearch.get('filter') ?? 'allcontent';

  useEffect(() => {
    if(inputValue === ''){
      setFilterResponse(userBaseData);
    }
  },[inputValue])

  useEffect(() => {
    if(userBaseData && inputValue === ''){
      const response = filterUsingFilterType(userBaseData, routerFilter)
      setFilterResponse(response);
    }
  },[routerFilter, userBaseData])

  useEffect(() => {
    if(userBaseData && inputValue !== ''){
      const response = filterUsingSearchType(userBaseData, inputValue);
      setFilterResponse(response);
    }  
  },[inputValue, userBaseData])


  return { filterResponse }
}




































// import { useSearchParams } from "next/navigation";
// import { useInputValue, useToggleInput } from "./useRedux";
// import { useEffect, useState } from "react";
// import { type IFormContent } from "@/ts/interface";
// import { filterUsingFilterType, filterUsingSearchType } from "@/utils/filter";
// import { useSelector } from "react-redux";

// export const useFetchFilter = () => {
//   const { inputValue } = useInputValue();

//   const routerSearch = useSearchParams();
//   const routerFilter = routerSearch.get('filter') ?? 'allcontent';

//   const { toggleInput } = useToggleInput();

//   const userContent = useSelector((state: {userContent: {value: IFormContent[]}}) => state.userContent.value);

//   const [filterTypeResponse, setFilterTypeResponse] = useState<IFormContent[]>([])

//   useEffect(() => {
//     if(inputValue !== ''){
//       const response = filterUsingSearchType(userContent, inputValue);
      
//       setFilterTypeResponse(response);
//     }
//     console.log('CHANGED THE SEARCH')
//   },[inputValue])




//   //   useEffect(() => {
//   //     console.log('routerFilter', routerFilter)
//   //     console.log(!toggleInput, inputValue);
//   //     // if(!toggleInput && inputValue !== ''){
//   //     //   console.log("OHHHHH FUCKKKK")
//   //     //   setFilterTypeResponse(userContent);
//   //     // }

//   //     const response = filterUsingFilterType(userContent, routerFilter);
//   //     setFilterTypeResponse(response);
//   //     console.log("CHANGED THE ROUTE")
//   //   },[routerFilter])


//   return { filterTypeResponse }
// }

