'use client'
import AppName from "../components/AppName/AppName";
import HeaderDashboard from "../components/Dashboard/Header/Header";
import ViewDashboard from "../components/Dashboard/View/View";
import FilterDashboard from "../components/Dashboard/Filter/Filter";
import { useAuthState } from "@/hooks/useAuthState";
import Loader from "../components/Loader/Loader";

const Page = () => {

  const { loading } = useAuthState();

  return(
    <main className="default-page-layout _light">

      {loading 
        ? <Loader color="GREEN"/>
        :
        <>
          <AppName />

          <HeaderDashboard />
          <FilterDashboard />
          <ViewDashboard />
        </>
      }

    </main>
  
  )
}

export default Page;
