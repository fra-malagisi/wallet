import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { AuxProps } from "../types";

const AuthGuard: FC<AuxProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/");
    }
  }, [session, status]);

  if (status === "loading" || !session) {
    return <h2>Loading</h2>;
  }

  return <>{children}</>;
};

export default AuthGuard;
