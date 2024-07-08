const ValidationVideo = (formData) => {
    let error = {}
    if (!formData.Title) {
        error.Title = "Content Name is require"
    }
    if (!formData.CoursesId) {
        error.CoursesId = "Select Class is require"
    }
    if (!formData.TopicId) {
        error.TopicId = "Select Subject is require"
    }
    if (!formData.videoselect) {
        error.videoselect = "Select Video type is require"
    }

    return error
}
export default ValidationVideo