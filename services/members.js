import Axios from "axios";

const getMembers = async (skip, limit) => {
  try {
    const data = await Axios.get(
      `http://0.0.0.0:4557/api/v1/users/?skip=${skip}&limit=${limit}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-members", error);
  }
};

const getMember = async (id) => {
  try {
    const data = await Axios.get(`http://0.0.0.0:4557/api/v1/users/${id}`);

    return data.data;
  } catch (error) {
    console.error("error-get-organization", error);
  }
};

export { getMembers, getMember };
