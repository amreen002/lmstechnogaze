import React from "react";

function CreateSubjectComponent({ closeSubject }) {


    return (
        <>
             <div class="modal-content " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <button type="button" class="btn-close" onClick={closeSubject}></button>
                            <form>
                            <div className="row create_course">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                                <div className="single-input">
                                        <label htmlFor="slug" className="form-label">Subject Name</label>
                                        <input
                                            type="number"
                                            id="slug"
                                           placeholder="Mathes/Physic/Science"
                                            name="CoursePrice"
                                           
                                        />
                                    </div>

                                </div>
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                                <div className="single-input">
                                        <label htmlFor="name" className="form-label">Select Class</label>
                                        <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId" >
                                                                    <option value="">Class 6th/7th/8th</option>
                                                                   
                                                                </select>
                                    </div>

                                </div>
                               
                            
                                <div class="col-12 col-lg-12 col-md-12 single-input d-flex">
                                        <button type="submit" class="btn btn-primary data-submit">Submit</button>
                                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="#collapseOne" aria-label="Close">Cancel</button>
                                        </div>
                            </div>
                           
                            </form>
                </div>
        </>
    )
}
export default CreateSubjectComponent