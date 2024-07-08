const ValidationLession = (formData) => {
    let error = {}
    if (!formData.LessionTitle) {
        error.LessionTitle = "Module Name is require"
    }
    if (!formData.CoursesId) {
        error.CoursesId = "Select class is require"
    }
    if (!formData.TopicId) {
        error.TopicId = "Subject is require"
    }
    if (!formData.file) {
        error.file = "file is require"
    }

    return error
}
export default ValidationLession