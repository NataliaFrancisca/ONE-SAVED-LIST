import { type IUserResource } from "@/ts/interface";
import { useEffect, useState } from "react";
import { useUserContent } from "./useRedux";
import { DataBaseService } from "@/firebase/database/service-db";

export const useFetch = () => {

  const { userContent, onUpdateUserContent } = useUserContent();
  const [loading, setLoading] = useState(true);

  const fetchAllContent = async() => {
    const database = new DataBaseService();
    const data = await database.get() as {content: IUserResource[]}
    
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