import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;

export const getAssignments = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const getAssignmentById = async (courseId, assignmentId) => {
  const response = await axios.get(
      `${COURSES_URL}/${courseId}/assignments/${assignmentId}`
  );
  return response.data;
};

export const addAssignmentToDB = async (courseId, assignment) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
  );
  return response.data;
};

export const updateAssignmentToDB = async (courseId, assignmentId,
    newAssignment) => {
  const response = await axios.put(
      `${COURSES_URL}/${courseId}/assignments/${assignmentId}`, newAssignment
  );
  return response.data;
};

export const deleteAssignmentFromDB = async (courseId, assignmentId) => {
  const response = await axios.delete(
      `${COURSES_URL}/${courseId}/assignments/${assignmentId}`
  );
  return response.data;
};