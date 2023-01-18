import { getToken, hasExpiredToken } from "../api/token.api";

export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    // Usuario no logueado
    logout();
  } else {
    // Token valido
    if (hasExpiredToken(token)) {
      // Token Caducado (return true)
      logout();
    } else {
      // Token valido
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}
