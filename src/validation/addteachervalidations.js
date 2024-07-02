const ValidateCreate = (formData) => {
  let error = {}
console.log(formData)
  if (!formData.Name) {
    error.Name = 'First Name is required'
  }
  if (!formData.LastName) {
    error.LastName = 'Last Name is required'
  }
  if (!formData.Email) {
    error.Email = 'Email is required'
  }
  else if (!(/^\S+@\S+\.\S+$/.test(formData.Email))) {
    error.Email = 'Email is invalid'
  }
  if (!formData.PhoneNumber) {
    error.PhoneNumber = 'Phone Number is required'
  }
  else if (!(/^\d{10}$/.test(formData.PhoneNumber))) {
    error.PhoneNumber = 'Phone Number is invalid'
  }
  if (!formData.Username) {
    error.Username = 'User name is required'
  }
  else if (!(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/.test(formData.Username))) {
    error.Username = 'User name is invalid'
  }
  if (!formData.Password) {
    error.Password = 'Password is required'
  }
  else if (formData.Password.length < 8) {
    error.Password = 'Password is minimum 8 charecter '
  }
  if (!formData.DOB) {
    error.DOB = 'Date of barth is required'
  }
  if (!formData.TeacherType) {
    error.TeacherType = 'Select teacher type is required'
  }
  if (!formData.CountryId) {
    error.CountryId = 'Select country is required'
  }
  if (!formData.StateId) {
    error.StateId = 'Select state is required'
  }
  if (!formData.DistrictId) {
    error.DistrictId = 'Select district is required'
  }
  if (!formData.Address) {
    error.Address = 'Address is required'
  }
  if (!formData.City) {
    error.City = 'City is required'
  }
  if (!formData.YourIntroducationAndSkills) {
    error.YourIntroducationAndSkills = 'Your Introducation And Skills is required'
  }

  return error;
};
export default ValidateCreate
