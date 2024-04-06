import { useRouter } from "next/router";

export const useRouterHook = () => {
    const router = useRouter();

    const onNavigation = (path: string) => {
        router.push(`/${path}`);
    };


    return { onNavigation };
};