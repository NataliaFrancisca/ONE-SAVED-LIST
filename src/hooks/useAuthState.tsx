import { auth } from "@/firebase/config";
import { getCookie } from "@/service/cookies";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export const useAuthState = () => {
  const router = useRouter();
  const currentUserCookie = getCookie();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUserCookie) {
        setLoading(!loading);
      } else {
        router.push('/');
      }
    });
  }, []);

  return { loading }
}