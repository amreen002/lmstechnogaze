import React from "react";
import { Editor } from '@tinymce/tinymce-react';
function CreateModelComponent({ closePopup }) {


    return (
        <>
        <div class="modal-content " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button type="button" onClick={closePopup} class="btn-close"></button>

            <form>
                <div className="row create_course">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label for="name" class="form-label">Title</label>
                            <input type="text" class="form-control" id="name" placeholder="Chapteres / History" name='LessionTitle' aria-label="John Doe" />
                        </div>

                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label for="exampleFormControlSelect2" class="form-label">Select Class</label>
                            <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId">
                                <option value="">Select</option>
                                <option></option>
                            </select>
                        </div>

                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label for="exampleFormControlSelect2" class="form-label">Select Subject</label>
                            <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId" >
                                <option value="">Select</option>

                            </select>
                        </div>

                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label for="exampleFormControlSelect2" class="form-label">Upload Module PDF | Docx | Doc</label>

                            <div class="input-group">
                                <input
                                    type="file"
                                    class="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                    name="file"
                                />

                            </div>
                           

                        </div>

                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label class="form-label">About Class</label>
                            <input
                                type="text"
                                class="form-control"
                                name="AboutCourse"
                                placeholder="About Class Content"

                            /> </div>


                    </div>
                    <div    className="col-12 col-md-12 col-lg-12 col-xl-12 p-3">
                        <div className="single-input">
                            <label class="form-label">Description</label>
                            <input
                                type="text"
                                class="form-control"
                                name="Description"
                                placeholder="Description Class Content"

                            /> </div>

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
export default CreateModelComponent