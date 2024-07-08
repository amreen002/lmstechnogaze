import React, {useEffect,useState} from 'react';
import Navbarmenu from '../Components/Navbarmenu';

import FooterFrontend from '../Components/FooterFrontend';

const Lsa = () => {
    const [animate1, setAnimate1] = useState(false);

    useEffect(() => {
      setAnimate1(true);
    }, []);

    const [animate3, setAnimate3] = useState(false);

    useEffect(() => {
      setAnimate3(true);
    }, []);

  
  return (


<div>
<section className='sticy-header logo-size'>
        <Navbarmenu />
      </section> 
      <div class="breadcrumb-bar">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12 col-12">
                          <h2 class="breadcrumb-title">Learning Style Assesments</h2>
                          <nav aria-label="breadcrumb" class="page-breadcrumb">
                              <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                                  <li class="breadcrumb-item" aria-current="page">LSA</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>

      <section className='pt--110 pb--110  about_one'  >
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
                    <div className='lsa_img'>
                              <figure class="wpb_wrapper vc_figure">
                                  <div class="vc_single_image-wrapper   vc_box_border_grey">
                                    <img fetchpriority="high" decoding="async" width="635" height="625" 
                                    src="assets/fontend/images/about/1.png" class="vc_single_image-img attachment-full" alt="" title="into"
                                     srcset="assets/fontend/images/about/1.png 635w, 
                                     assets/fontend/images/about/1.png 600w, 
                                     assets/fontend/images/about/1.png 300w"
                                      sizes="(max-width: 635px) 100vw, 635px" />

                                      </div>
                              </figure>
                    </div>
                </div>
                 <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
                    <div className='bounce-in-right '>
                              <div className='about_head lsa_bx'>
                              
                                  <h1>UNDERSTANDING LEARNING STYLES</h1>
                              
                              <div className='about_cnt'>
                                  <p>
                                      Learning styles are the unique ways in which individuals engage with learning. </p>

                                  <p>It's about discovering how you best absorb and process information. </p>

                                  <p>Whether you're a visual learner who thrives on images and diagrams,
                                      an auditory learner who absorbs information through listening, or a
                                      kinesthetic learner who learns best through hands-on activities, understanding your
                                      learning style is key to optimizing your educational experience.

                                  </p>
                                  <a href="signup" className='btn btn-primary custom_lsa'>Know your learning style now</a>
                              </div>
                              </div>
                    </div>
                  
                 </div>
                 
            </div>
        </div>
      </section>

      <section className='pt--110 pb--110 about_two' >
        <div className='container'>
                  <div className='row'>
                      <div className='col-12 col-xl-5 col-lg-5 col-md-5'>
                          <div className='lsa_bx2'>
                              <div className='about_hd'>
                            
                                  <h1>
                                      WHY LEARNING STYLE MATTERS?
                                  </h1>
                                  <p>
                                      Recognizing and embracing your learning style isn't just about academic success; it's about empowering yourself with self-awareness. </p>
                                  <p>By understanding how you learn best, you can tailor your study methods, resources, and teaching approaches to match your individual preferences and strengths.</p>
                                  <p>This not only enhances your comprehension and analytical abilities but also fosters better mental and emotional well-being</p>

                              </div>
                          </div>
                      </div>


                      <div className='col-12 col-xl-7 col-lg-7 col-md-7'>
                          <div className='lsa_img2'>
                              <figure class="wpb_wrapper vc_figure">
                                  <div class="vc_single_image-wrapper   vc_box_border_grey">
                                      <img fetchpriority="high" decoding="async" width="635" height="625"
                                          src="assets/fontend/images/about/2.png" class="vc_single_image-img attachment-full" alt="" title="into"
                                          srcset="assets/fontend/images/about/2.png 635w, 
                                     assets/fontend/images/about/2.png 600w, 
                                     assets/fontend/images/about/2.png 300w"
                                          sizes="(max-width: 635px) 100vw, 635px" />

                                  </div>
                              </figure>
                          </div>
                      </div>



                  </div>
        </div>
      </section>

      <section className='py-5  whatlearning'  >
            <div className='container'>
                <div className='row'>
                   
                    <div className='col-12 col-xl-12 col-lg-12 col-md-12'>
                        <div className={`about_last ${animate3 ? 'bounce-down' : ''}`}>
                            <h3>
                                What Learning Style Assessment Offers You?
                            </h3>
                        </div>
                    </div>
                  
                </div>
            </div>
      </section>

      <section>
        <div className='container'>
            <div className='row'>

<div className='col-12 col-xl-12 col-lg-12 col-md-12'>
<div className='tab_lsa'>
<div className='tab_bg'>
<ul class="mb-3 nav nav-pills row-cols-3" id="pills-tab" role="tablist">
  <li class="nav-item tab_one" role="presentation">
    <a class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" 
    role="tab" aria-controls="pills-home" aria-selected="true">BENEFITS</a>
  </li>
  <li class="nav-item tab_two" role="presentation">
    <a class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" 
    role="tab" aria-controls="pills-profile" aria-selected="false">FOR STUDENT</a>
  </li>
  <li class="nav-item tab_three" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" 
    role="tab" aria-controls="pills-contact" aria-selected="false">FOR PARENTS/GUARDIANS</a>
  </li>
</ul>

</div>


<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className='row'>
        <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
            <div className='bene'>
              <img src='assets/fontend/images/about/3.png' className='img-fluid' />
            </div>
        </div>
        <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
        <div className='benifits'>
                           
                            <ul className='list-unstyled pt-4'>
                               <li> <span >&#128073;</span> Understanding learning style</li>
                               <li> <span >&#128073;</span> Comprehension and analysis</li>
                               <li><span >&#128073;</span> Mental and emotional health</li>
                               <li><span >&#128073;</span> Self-awareness</li>
                               <li><span >&#128073;</span> Personal management</li>
                            </ul>
                        </div>
        </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                      <div className='row'>
                                       
                                              <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
                                                  <div className='benifits'>

                                                      <ul className='list-unstyled pt-4'>
                                                          <li><span >&#128073;</span> Identifies best approach for academic success</li>
                                                          <li><span >&#128073;</span> <a href=''>Improves academic excellence</a></li>
                                                          <li><span >&#128073;</span> Note taking strategies for improved learning </li>
                                                          <li><span >&#128073;</span> Customised notes tailored to unique learning styles</li>
                                                          <li><span >&#128073;</span> Continuous monitoring and evaluation of performance</li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
            <div className='bene'>
              <img src='assets/fontend/images/about/4.png' className='img-fluid' />
            </div>
        </div>
                                          

                                      </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className='row'>
                                        
                                              <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
                                                  <div className='benifits'>

                                                  <ul className='list-unstyled pt-4'>
                               <li><span >&#128073;</span> Helps child excel academically and personally</li>
                               <li><span >&#128073;</span> Enhanced comprehension and analytical abilities</li>
                               <li><span >&#128073;</span> Better mental and emotional health</li>
                               <li><span >&#128073;</span> Increased self awareness - “what works best for them”</li>
                               <li><span >&#128073;</span> Enhanced personal management </li>
                            </ul>
                                                  </div>
                                              
                                             
                                          </div>
                                          <div className='col-12 col-xl-6 col-lg-6 col-md-6'>
            <div className='bene'>
              <img src='assets/fontend/images/about/4.png' className='img-fluid' />
            </div>
        </div>
                                      </div>
  </div>
</div>
</div>
</div>

          
                    
            </div>
        </div>
      </section>
      <FooterFrontend />
</div>

  )
}
export default Lsa;