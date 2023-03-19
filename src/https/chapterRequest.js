import instance from "../base/settings/base";

export const chapterwithfolderId = async (folderId) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: `all/chapter/folderName`,
  });
  return result.data;
};
