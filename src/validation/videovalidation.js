const ValidationVideo = (formData) => {
    let error = {}
    if (!formData.Title) {
        error.Title = "Title is require"
    }
    if (!formData.CoursesId) {
        error.CoursesId = "Course is require"
    }
    if (!formData.TopicId) {
        error.TopicId = "Topic is require"
    }
    if (!formData.videoselect) {
        error.videoselect = "Select video type is require"
    }

    return error
}
export default ValidationVideo