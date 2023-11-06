import db from '../../Database';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  assignments: db.assignments,
  newAssignment: {
    _id: '',
    course: '',
    title: '',
    description: '',
    points: '',
    due: '',
    availableFrom: '',
    availableTo: '',
  }
}

const assignmentSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setNewAssignmentId(state, action) {
      state.newAssignment._id = action.payload;
    },
    setNewAssignmentCourse(state, action) {
      state.newAssignment.course = action.payload;
    },
    setAssignmentName(state, action) {
      state.newAssignment.title = action.payload;
    },
    setAssignmentDescription(state, action) {
      state.newAssignment.description = action.payload;
    },
    setPoints(state, action) {
      state.newAssignment.points = action.payload;
    },
    setDueDate(state, action) {
      state.newAssignment.due = action.payload;
    },
    setAvailableFrom(state, action) {
      state.newAssignment.availableFrom = action.payload;
    },
    setAvailableTo(state, action) {
      state.newAssignment.availableTo = action.payload;
    },
    setAssignments(state, action) {
      state.assignments = action.payload;
    },
    setNewAssignment(state, action) {
      state.newAssignment = action.payload;
    },
    addAssignment(state, action) {
      state.assignments.push(action.payload);
      state.newAssignment = initialState.newAssignment;
    },
    updateAssignment(state, action) {
      const index = state.assignments.findIndex(
          assignment => assignment._id === action.payload._id);
      state.assignments[index] = action.payload;
    },
    deleteAssignment(state, action) {
      const index = state.assignments.findIndex(
          assignment => assignment._id === action.payload);
      state.assignments.splice(index, 1);
    },
    resetNewAssignment(state) {
      state.newAssignment = initialState.newAssignment;
    }
  }
})
export const {
  setNewAssignmentId,
  setNewAssignmentCourse,
  setAssignments,
  setNewAssignment,
  addAssignment,
  updateAssignment,
  deleteAssignment,
  setAssignmentName,
  setAssignmentDescription,
  setPoints,
  setDueDate,
  setAvailableFrom,
  setAvailableTo,
  resetNewAssignment
} = assignmentSlice.actions;
export default assignmentSlice.reducer;