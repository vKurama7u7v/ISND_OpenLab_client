import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMeApi } from "../api/user.api";
import useAuth from "../hooks/useAuth";

import BasicLayout from "../layouts/BasicLayout";
import Account from "../screens/Account";
import { toast } from "react-toastify";

export default function account() {
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;
  if (!auth && !user) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout>
      <Account user={user} logout={logout} setReloadUser={setReloadUser} />
    </BasicLayout>
  );
}
