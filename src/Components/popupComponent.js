import React, { useEffect, useState } from 'react';
import axios from 'axios';
function PopupComponent({ closePopup }) {


  return (
   <div>
<div class="modal-content popup " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-header">
                    <h5 class="modal-title">Hi, Welcome back!</h5>
                    <button type="button" onClick={closePopup} class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <form action="#" class="login-form">
                        <input type="text" placeholder="Username of Email Address" required=""/>
                        <input type="password" placeholder="Password" required=""/>
                        <div class="d-flex mb--20 align-items-center">
                            <input type="checkbox" id="examplecheck-modal"/>
                            <label for="examplecheck-modal">I agree to the terms of use and privacy policy.</label>
                        </div>
                        <button type="submit" class="rts-btn btn-primary">Sign In</button>

                        <p class="dont-acc mt--20">Dont Have an Account? <a href="">Sign-up</a> </p>
                    </form>
                </div>
            </div>
   </div>
  );
}

export default PopupComponent;