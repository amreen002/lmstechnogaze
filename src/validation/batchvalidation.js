const ValidationBatch = (formData) => {
    let error = {}
    if (!formData.Title) {
        error.Title = "Title is require"
    }
    if (!formData.InstructorId) {
        error.InstructorId = "Instructor is require"
    }
    if (!formData.CoursesId) {
        error.CoursesId = "Courses is require"
    }
    if (!formData.Education) {
        error.Education = " Batch Duration is require"
    }
    if (!formData.BatchStartTime) {
        error.BatchStartTime = " Batch Start Time is require"
    }
    if (!formData.BatchEndTime) {
        error.BatchEndTime = " Batch End Time e is require"
    }

    if (!formData.BatchsInWeek) {
        error.BatchsInWeek = "Select Batchs In Week is require"
    }

    if (!formData.StartedAtWeek) {
        error.StartedAtWeek = "Select Started At Week is require"
    }
    if (!formData.BatchStatus) {
        error.BatchStatus = "Select Batch Status type is require"
    }
    if (!formData.BatchDatails) {
        error.BatchDatails = " Batch Datails type is require"
    }

    return error
}
export default ValidationBatch