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
    console.log("REQUEST", data.data);
    return data.data;
  } catch (error) {
    console.error("error-get-member", error);
  }
};

const createProjectForMember = async (id, body) => {
  try {
    const data = await Axios.post(
      `http://0.0.0.0:4557/api/v1/users/${id}/projects/`,
      body
    );

    return data.data;
  } catch (error) {
    console.error("error-post-project", error);
  }
};

export { getMembers, getMember, createProjectForMember };
