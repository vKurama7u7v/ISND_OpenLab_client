import axios from "axios";
import { toast } from "react-toastify";

import { BASE_PATH } from "../utils/const.utils";
import { authFetch } from "../utils/fetch.utils";

export async function registerUserApi(formData) {
  try {
    const url = `${BASE_PATH}/api/auth/local/register`;
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      toast.error(error.response.data.error.message, {
        theme: "dark",
      });
    } else {
      toast.error(error.message, {
        theme: "dark",
      });
    }
    return null;
  }
}

export async function loginUserApi(formData) {
  try {
    const url = `${BASE_PATH}/api/auth/local`;
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      toast.error(error.response.data.error.message, {
        theme: "dark",
      });
    } else {
      toast.error(error.message, {
        theme: "dark",
      });
    }
    return null;
  }
}

export async function resetUserPasswordApi(email) {
  try {
    const url = `${BASE_PATH}/api/auth/forgot-password`;
    const body = { email: email };
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      toast.error(error.response.data.error.message, {
        theme: "dark",
      });
    } else {
      toast.error(error.message, {
        theme: "dark",
      });
    }
    return null;
  }
}

export async function getMeApi(logout) {
  try {
    const url = `${BASE_PATH}/api/users/me`;
    const result = await authFetch(url, null, logout);

    console.log(result);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateNameUserApi(idUser, data, logout) {
  try {
    const url = `${BASE_PATH}/api/users/${idUser}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const result = await authFetch(url, params, logout);
    return result ? result : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updatePasswordUserApi(idUser, password, logout) {
  try {
    const url = `${BASE_PATH}/api/users/${idUser}`;
    const params = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    };
    const response = await authFetch(url, params, logout);
    return response ? response : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
