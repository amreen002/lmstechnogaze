const ValidationStudentReport =(formData)=>{

    let error={}
    if(!formData.Name){
        error.Name='Name is require'
    }
        
    if(!formData.LastName){
        error.LastName ="Last Name is require"
    }
        
    if(!formData.Email){
        error.Email ="Email is require"
    }
    else if(!(/^\S+@\S+\.\S+$/.test(formData.Email))){
        error.Email='Email is invalid'
      }
        
    if(!formData.PhoneNumber){
        error.PhoneNumber ="Phone Number is require"
    }
    else if(!(/^\d{10}$/.test(formData.PhoneNumber))){
        error.PhoneNumber='Phone Number is invalid'
      }
    if(!formData.Date){
        error.Date="Date is require"
    }
        
    if(!formData.Password){
        error.Password ="Password is require"
    }
    else if(formData.Password.length < 8){
        error.Password='Password is minimum 8 charecter '
      }
    if(!formData.Username){
        error.Username ="User Name require"
    }
    else if(!(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/.test(formData.Username))){
        error.Username='User name is invalid'
      }

    if(!formData.CoursesId){
        error.CoursesId ="Courses is require"
    }
        
    if(!formData.BatchId){
        error.BatchId ="Batch is require"
    }
        
    if(!formData.CountryId){
        error.CountryId ="Country is require"
    }
        
    if(!formData.StateId){
        error.StateId ="State is require"
    }
        
    if(!formData.DistrictId){
        error.DistrictId ="District is require"
    }
        
    if(!formData.City){
        error.City ="City is require"
    }
        
    if(!formData.Address){
        error.Address ="Address is require"
    }

    return error

}
export default ValidationStudentReport