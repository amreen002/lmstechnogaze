import React from "react";
function CreateAnnouncement({ closePopup }){
    return(
        
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Announcement</h5>
                    <button type="button" class="btn-close" onClick={closePopup}></button>
                </div>
                <div class="modal-body">
                    <form action="#" class="modal-form">
                        <select class="nice-select inputts"  name="price">
                            <option>User Experience</option>
                            <option value="asc">Recently Update Web Design </option>
                            <option value="desc">Web Design Course</option>
                            <option value="pop">Update Web Design</option>
                            <option value="low">Recently Update Web</option>
                            <option value="high">Course: New Courses</option>
                        </select>
                        <div class="single-input mt--20">
                            <label for="course">Announcement Title</label>
                            <input id="course" type="text" className="inputts" placeholder="Announcement title"/>
                        </div>
                        <div class="single-input">
                            <label for="message">Summary</label>
                            <textarea id="message" className="inputts" placeholder="Summary..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="rts-btn btn-primary">Publish</button>
                </div>
                </div>
               
   
    )
}
export default CreateAnnouncement