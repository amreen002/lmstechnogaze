const ValidationCourse=(formData)=>{
    let error={}
    if(!formData.name){
        error.name="Name is requier"
    }
 
    return error;
}
export default ValidationCourse