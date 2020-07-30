export const addSection = () => {
  console.log('adding section');
  return {
    type: "ADD_SECTION"
  }
}

export const removeSection = (sectionId) => {
  return {
    type: "REMOVE_SECTION", 
    sectionId
  }
}

export const saveSectionTitle = (sectionId, sectionTitle) => {
  return {
    type: 'SAVE_SECTION_TITLE', 
    sectionId, 
    sectionTitle
  }
}