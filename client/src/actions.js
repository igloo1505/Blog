import Axios from "axios";
export const getAll = async () => {
  const res = await Axios.get("/getBlogs/all");
  return res.data;
};
