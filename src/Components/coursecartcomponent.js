import React from "react";

function CourseCartComponent(){

    return(
        <>
        <div class="course-content-area" >
                                        <h5 class="heading-title">
                                            <a href="single-course.html">The Complete Web Developer in 2023: Zero to Mastery</a>
                                        </h5>
                                        <div class="tags-area-wrapper">
                                            <div class="single-tag">
                                                <span>Beginner</span>
                                            </div>
                                            <div class="lesson-studente">
                                                <div class="lesson">
                                                    <i class="fa-light fa-calendar-lines-pen"></i>
                                                    <span>25 Lessons</span>
                                                </div>
                                                <div class="lesson">
                                                    <i class="fa-light fa-user-group"></i>
                                                    <span>54</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="desc">Learn to create Machine Learning with Algorithms in Python and R from two Data Science experts included.</p>
                                        <ul class="wrapper-list wraplist">
                                            <li><i class="fa-solid fa-check"></i>Master Machine Learning on Python</li>
                                            <li><i class="fa-solid fa-check"></i>Master Machine Learning on Python</li>
                                            <li><i class="fa-solid fa-check"></i>Make accurate predictions</li>
                                        </ul>
                                        <div class="button-area">
                                            <a href="cart.html" class="rts-btn btn-primary">Add To Cart</a>
                                            <a href="wishlist.html" class="wishlist-btn"><i class="fa-thin fa-circle-heart"></i></a>
                                        </div>
                        
                                    </div>
        </>
    )

}
export default CourseCartComponent