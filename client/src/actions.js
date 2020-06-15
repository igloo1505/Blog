import Axios from "axios";
export const getAll = async () => {
  console.log("get all running");
  const res = await Axios.get("/getBlogs/all");
  return res.data;
};

export const getByDateFromRecent = async () => {
  console.log("get from recent running");
  const res = await Axios.get("getBlogs/byDate");
  return res.data;
};

export const getByTag = async (tag) => {
  const res = await Axios.get(`/getBlogs/ByTag/${tag}`);
  console.log("By Tag in actions", res.data);
  return res.data;
};
export const getTagArray = async () => {
  console.log("getting tag array");
  const res = await Axios.get("/getBlogs/tagArray");

  return res.data;
};
