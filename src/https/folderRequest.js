import instance from "../base/settings/base";

export const folders = async () => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "folders",
  });
  return result.data;
};

export const folderName = async (folderName) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: `folder/folderName`,
  });
  return result.data;
};

export const allfolders = async () => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "all/folder",
  });
  return result.data;
};
