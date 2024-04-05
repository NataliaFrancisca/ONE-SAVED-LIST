'use client';
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import AppName from "./components/AppName/AppName";

export default function Home () {

  const router = useRouter();
  const onNavigation = () => router.push('/register');

  return (
    <main className={`default-page-layout _dark ${style.page_home}`}>
      <AppName />

      <img
        src="./illustration/illustration-small-size.svg"
        alt="Illustration of a black and white animated character resembling a person using glasses and a cap. This character is holding a phone"
        tabIndex={2}
      />

      <button className="default-button-component" onClick={() => onNavigation()} aria-label="Navigate into the register page" tabIndex={3}>
        GET STARTED
      </button>
    </main>
  )
}
