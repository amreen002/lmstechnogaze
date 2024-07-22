import React from "react";
import { useState } from "react";

function CreateContentComponent({ closeContent }) {
    const [selectedvideo, setselectedvideo] = useState('');
    const handleSelectVideo = (e) => {
        const value = e.target.value;
        setselectedvideo(value);
    };
    return (
        <>
            <div class="modal-content " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <button type="button" class="btn-close" onClick={closeContent}></button>
                <form>
                    <div className="row create_course">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="single-input">
                                <label for="name" class="form-label">Title</label>
                                <input type="text" class="form-control" id="name" placeholder="Content Title" name='Title' aria-label="John Doe" />

                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="single-input">
                                <label for="exampleFormControlSelect2" class="form-label">Select Class</label>
                                <select id="exampleFormControlSelect2" class="select2 form-select" name="CoursesId"  >
                                    <option value="">Select</option>
                                    <option></option>
                                </select>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="single-input">
                                <label for="exampleFormControlSelect2" class="form-label">Select Subject</label>
                                <select id="exampleFormControlSelect2" class="select2 form-select" name="TopicId" >
                                    <option value="">Select</option>
                                    <option></option>
                                </select>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 p-3">
                            <div className="single-input">
                                <label for="exampleFormControlSelect2" class="form-label">Select Video</label>
                                <select
                                    id="exampleFormControlSelect2"
                                    className="select2 form-select"
                                    name="videoselect"
                                    onChange={handleSelectVideo}
                                >
                                    <option value="">Select Video Source</option>
                                    <option value="gallery">Video URL</option>
                                    <option value="upload">Choose From Gallery</option>
                                </select>

                                {selectedvideo === 'upload' ? (
                                    <div className="single-input">
                                        <label className="form-label">Upload Video</label>
                                        <div className="input-group">
                                            <input
                                                type="file"
                                                class="form-control"
                                                id="inputGroupFile04"
                                                aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload"
                                                multiple />
                                        </div>
                                    </div>
                                ) : selectedvideo === 'gallery' ? (
                                    <div className="single-input" data-quillbot-parent="oopPrLVIHzQ4Ey_EnMuDh">

                                        <label className="form-label">Video Url</label>
                                        <textarea
                                            id="full-featured-non-premium"
                                            name="VideoIframe"

                                            className="form-control w-100"
                                            data-gramm="false"
                                            wt-ignore-input="true"
                                            data-quillbot-element="oopPrLVIHzQ4Ey_EnMuDh"
                                        ></textarea>
                                    </div>
                                ) : null}
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
export default CreateContentComponent