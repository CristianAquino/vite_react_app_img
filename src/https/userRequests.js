import instance from "../base/settings/base";

export const profileUser = async (data) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "user/profile",
    data,
  });
  return result.data;
};
