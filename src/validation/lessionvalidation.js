const ValidationLession = (formData) => {
    let error = {}
    if (!formData.LessionTitle) {
        error.LessionTitle = "Lession Title is require"
    }
    if (!formData.CoursesId) {
        error.CoursesId = "Course is require"
    }
    if (!formData.TopicId) {
        error.TopicId = "Topic is require"
    }
    if (!formData.file) {
        error.file = "file is require"
    }

    return error
}
export default ValidationLession