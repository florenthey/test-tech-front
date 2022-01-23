import Axios from "axios";

const getProjects = async (skip, limit) => {
  try {
    const data = await Axios.get(
      `http://0.0.0.0:4557/api/v1/projects/?skip=${skip}&limit=${limit}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-projects", error);
  }
};

const getProject = async (id) => {
  try {
    const data = await Axios.get(`http://0.0.0.0:4557/api/v1/projects/${id}`);
    return data.data;
  } catch (error) {
    console.error("error-get-projects", error);
  }
};

export { getProjects, getProject };
