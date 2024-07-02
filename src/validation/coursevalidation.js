const ValidationAllCourse = (formData) =>{

    let error={}

    if(!formData.name){
        error.name="Name is require"
    }
    if(!formData.CoursePrice){
        error.CoursePrice="Course Price is require"
    }
    if(!formData.CourseDuration){
        error.CourseDuration="Course Duration is require"
    }
    if(!formData.CourseCategoryId){
        error.CourseCategoryId="Course Category Id is require"
    }
    if(!formData.file){
        error.file="file is require"
    }
    if(!formData.AboutCourse){
        error.AboutCourse="About Course is require"
    }
    if(!formData.Description){
        error.Description="Description is require"
    }

return error

}
export default ValidationAllCourse