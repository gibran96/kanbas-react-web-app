import db from '../../Database';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  modules: db.modules,
  formData: {
    sections: [
      {
        topic: '',
        headings: [
          {
            name: '',
            objectives: [''],
          },
        ],
      },
    ],
  },
  newModule: {
    _id: "1234",
    course: "1234",
    weeks: {
      sections: [
        {
          topic: '',
          headings: [
            {
              name: '',
              objectives: [''],
            },
          ],
        },
      ],
    },
  },
  addToggle: false
}

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setAddToggle(state, action) {
      state.addToggle = action.payload;
    },
    setModules(state, action) {
      state.modules = action.payload;
    },
    setNewModule(state, action) {
      state.newModule = action.payload;
    },
    setIDs(state, action) {
      state.newModule._id = action.payload;
      state.newModule.course = action.payload;
    },
    setTopic(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: [
          {
            ...state.formData.sections[0],
            topic: action.payload
          }
        ]
      }
    },
    setHeading(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: state.formData.sections.map((section, sIndex) => {
          if (sIndex === action.payload.sectionIndex) {
            return {
              ...section,
              headings: section.headings.map((heading, hIndex) => {
                if (hIndex === action.payload.headingIndex) {
                  return {
                    ...heading,
                    name: action.payload.value,
                  }
                }
                return heading;
              })
            }
          }
          return section;
        })
      }
    },
    setObjective(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: state.formData.sections.map((section, sIndex) => {
          if (sIndex === action.payload.sectionIndex) {
            return {
              ...section,
              headings: section.headings.map((heading, hIndex) => {
                if (hIndex === action.payload.headingIndex) {
                  return {
                    ...heading,
                    objectives: heading.objectives.map((objective, oIndex) => {
                      if (oIndex === action.payload.objectiveIndex) {
                        return action.payload.value;
                      }
                      return objective;
                    })
                  }
                }
                return heading;
              })
            }
          }
          return section;
        })
      }
    },
    addNewObjectiveField(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: state.formData.sections.map((section, sIndex) => {
          if (sIndex === action.payload.sectionIndex) {
            return {
              ...section,
              headings: section.headings.map((heading, hIndex) => {
                if (hIndex === action.payload.headingIndex) {
                  return {
                    ...heading,
                    objectives: [...heading.objectives, '']
                  }
                }
                return heading;
              })
            }
          }
          return section;
        })
      }
    },
    addNewHeadingField(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: [
          {
            ...state.formData.sections[action.payload.sectionIndex],
            headings: [
              ...state.formData.sections[action.payload.sectionIndex].headings,
              {
                name: '',
                objectives: [''],
              }
            ]
          },
          ...state.formData.sections.slice(action.payload.sectionIndex + 1),
        ]
      }
    },
    deleteHeadingField(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: state.formData.sections.map((section, sIndex) => {
          if (sIndex === action.payload.sectionIndex) {
            return {
              ...section,
              headings: [
                ...section.headings.slice(0, action.payload.headingIndex),
                ...section.headings.slice(action.payload.headingIndex + 1),
              ],
            }
          }
          return section;
        })
      }
    },
    deleteObjectiveField(state, action): void {
      state.formData = {
        ...state.formData,
        ...state,
        sections: state.formData.sections.map((section, sIndex) => {
          if (sIndex === action.payload.sectionIndex) {
            return {
              ...section,
              headings: section.headings.map((heading, hIndex) => {
                if (hIndex === action.payload.headingIndex) {
                  return {
                    ...heading,
                    objectives: [
                      ...heading.objectives.slice(0,
                          action.payload.objectiveIndex),
                      ...heading.objectives.slice(
                          action.payload.objectiveIndex + 1),
                    ]
                  }
                }
                return heading;
              })
            }
          }
          return section;
        })
      }
    }
  }
});

export const {
  setFormData,
  setModules,
  setNewModule,
  setIDs,
  setTopic,
  setHeading,
  setObjective,
  addNewObjectiveField,
  addNewHeadingField,
  deleteHeadingField,
    deleteObjectiveField
} = modulesSlice.actions;
export default modulesSlice.reducer;