import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
}

export const createModule = async (courseId, newModule) => {
  const response = await axios.post(`${COURSES_URL}/${courseId}/modules`,
      newModule);
  return response.data;
}

export const addWeekToModule = async (courseId, newWeek) => {
  const response = await axios.post(`${MODULES_URL}/${courseId}/weeks`,
      newWeek);
  return response.data;
}

export const deleteModuleFromDB = async (moduleId, index) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}/${index}`);
  console.log(response.data);
  return response.data;
}

export const updateModule = async (moduleId, index, newWeek) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}/${index}`,
      newWeek);
  return response.data;
}