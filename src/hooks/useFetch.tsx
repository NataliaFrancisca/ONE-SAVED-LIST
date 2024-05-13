import { getResource } from "@/firebase/database/resource";
import { type IFormContent } from "@/ts/interface";
import { useEffect, useState } from "react";
import { useUserContent } from "./useRedux";

export const useFetch = () => {

  const { userContent, onUpdateUserContent } = useUserContent();
  const [loading, setLoading] = useState(true);

  const fetchAllContent = async() => {
  
    const data = await getResource() as {content: IFormContent[]}
    
    if(data){
      onUpdateUserContent(data.content);
    }

    setLoading(false)
  };

  useEffect(() => {

    if(userContent.length === 0){
      void fetchAllContent()
    }
  
  },[])

  
  return { userContent, loading, fetchAllContent }
}