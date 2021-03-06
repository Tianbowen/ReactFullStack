import axios from "axios";

const baseUrl = "http://localhost:3001/phonebooks";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (id, updateObject) => {
  return axios
    .put(`${baseUrl}/${id}`, updateObject)
    .then((response) => response.data);
};

const deleteId = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getAll, create, update, deleteId };
