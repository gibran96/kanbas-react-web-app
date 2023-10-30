import React, {useState} from 'react';

function DynamicForm() {
  const [formData, setFormData] = useState({
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
  });

  const handleTopicChange = (e) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[0].topic = e.target.value;
    setFormData(updatedFormData);
  };

  const handleHeadingChange = (e, sectionIndex, headingIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings[headingIndex].name =
        e.target.value;
    setFormData(updatedFormData);
  };

  const handleObjectiveChange = (e, sectionIndex, headingIndex,
      objectiveIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings[headingIndex].objectives[
        objectiveIndex
        ] = e.target.value;
    setFormData(updatedFormData);
  };

  const addNewObjective = (sectionIndex, headingIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings[headingIndex].objectives.push(
        ''
    );
    setFormData(updatedFormData);
  };

  const addNewSection = () => {
    const updatedFormData = {...formData};
    updatedFormData.sections.push({
      topic: '',
      headings: [{name: '', objectives: ['']}],
    });
    setFormData(updatedFormData);
  };

  const addNewHeading = (sectionIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings.push({
      name: '',
      objectives: [''],
    });
    setFormData(updatedFormData);
  };

  const handleDeleteHeading = (sectionIndex, headingIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings.splice(headingIndex, 1);
    setFormData(updatedFormData);
  };

  const handleDeleteObjective = (sectionIndex, headingIndex,
      objectiveIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections[sectionIndex].headings[headingIndex].objectives.splice(
        objectiveIndex,
        1
    );
    setFormData(updatedFormData);
  };

  const handleDeleteSection = (sectionIndex) => {
    const updatedFormData = {...formData};
    updatedFormData.sections.splice(sectionIndex, 1);
    setFormData(updatedFormData);
  };

  const handleSave = () => {
    const savedData = formData;
    console.log(savedData);
  };

  return (
      <div>
        {formData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <input
                  type="text"
                  placeholder="Topic"
                  value={section.topic}
                  onChange={handleTopicChange}
              />
              {section.headings.map((heading, headingIndex) => (
                  <div key={headingIndex}>
                    <input
                        type="text"
                        placeholder="Heading"
                        value={heading.name}
                        onChange={(e) =>
                            handleHeadingChange(e, sectionIndex, headingIndex)
                        }
                    />
                    <button
                        onClick={() => handleDeleteHeading(sectionIndex,
                            headingIndex)}
                        disabled={headingIndex === 0}
                    >
                      Delete Heading
                    </button>
                    <ul>
                      {heading.objectives.map((objective, objectiveIndex) => (
                          <li key={objectiveIndex}>
                            <input
                                type="text"
                                placeholder="Objective"
                                value={objective}
                                onChange={(e) =>
                                    handleObjectiveChange(
                                        e,
                                        sectionIndex,
                                        headingIndex,
                                        objectiveIndex
                                    )
                                }
                            />
                            <button
                                onClick={() =>
                                    handleDeleteObjective(
                                        sectionIndex,
                                        headingIndex,
                                        objectiveIndex
                                    )
                                }
                                disabled={objectiveIndex === 0}
                            >
                              Delete Objective
                            </button>
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
              <button onClick={() => addNewHeading(sectionIndex)}>Add Heading
              </button>
              <button onClick={() => handleDeleteSection(sectionIndex)}
                      disabled={sectionIndex === 0}>
                Delete Section
              </button>
            </div>
        ))}

        <button onClick={addNewSection}>Add Section</button>
        <button onClick={handleSave}>Save</button>
      </div>
  );
}

function ModuleList() {
  return (
      <div>
        <h1>Module List</h1>
        <DynamicForm/>
      </div>
  );
}

export default ModuleList;
