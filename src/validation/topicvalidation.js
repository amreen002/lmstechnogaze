const ValidationTopic = (formData) => {
  let errors = {};
  
  if (!formData.name) {
    errors.name = "Name is required";
  }

  if (!formData.CoursesId) {
    errors.CoursesId = "CoursesId is required";
  }


  return errors;
};

export default ValidationTopic;
