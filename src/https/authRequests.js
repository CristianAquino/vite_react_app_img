import instance from "../base/settings/base";

export const signin = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "auth/signin",
    data,
  });
  return result.data;
};

export const signup = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "auth/signup",
    data,
  });
  return result.data;
};
