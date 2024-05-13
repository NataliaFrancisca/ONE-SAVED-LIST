'use client';
import { useFetchFilter } from '@/hooks/useFetchFilter';
import Loader from '../../Loader/Loader';
import style from './View.module.css';
import { useFetch } from "@/hooks/useFetch";

const ViewDashboard = () => {

  const { userContent, loading } = useFetch();
  const { filterResponse } = useFetchFilter(userContent);

  return(
    <main className={style['view-component']}>
      {loading && <Loader color='GREEN'/>}
      
      {filterResponse.map((content, key) => (
        <p key={key}>{content.title}</p>
      ))}
    </main>
  )
}

export default ViewDashboard;