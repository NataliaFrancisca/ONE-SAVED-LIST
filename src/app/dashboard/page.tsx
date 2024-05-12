import { getCookie } from "@/service/cookies";
import AppName from "../components/AppName/AppName";
import HeaderDashboard from "../components/Dashboard/Header/Header";
import ViewDashboard from "../components/Dashboard/View/View";
import FilterDashboard from "../components/Dashboard/Filter/Filter";

const Page = async () => {

  const userdata = await getCookie();

  return(
    <main className="default-page-layout _light">
      <AppName />

      <HeaderDashboard userData={userdata} />
      <FilterDashboard />
      <ViewDashboard />
    </main>
  )
}

export default Page;