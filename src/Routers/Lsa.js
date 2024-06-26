
import React from 'react';
import Navbarmenu from '../Components/Navbarmenu';



import backgroundImage from '../abt1.png';
import backgroundImagetwo from '../abt2.png';
import backgroundImagelst from '../abtlst.png';
import FooterFrontend from '../Components/FooterFrontend';

const Lsa = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      };
      const sectionStyletwo = {
        backgroundImage: `url(${backgroundImagetwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         height: '101vh',
        width: '100%',
      };
      const sectionStylelst = {
        backgroundImage: `url(${backgroundImagelst})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         height: '110vh',
        width: '100%',
      };
  return (


<div>
<section className='sticy-header logo-size'>
        <Navbarmenu />
      </section> 


      <section className='py-5 about_one' style={sectionStyle} >
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-xl-2 col-lg-2 col-md-2'></div>
                 <div className='col-12 col-xl-8 col-lg-8 col-md-8'>
                    <div className='about_head'>
                        <h1>UNDERSTANDING LEARNING STYLES</h1>
                    </div>
                    <div className='about_cnt'>
                        <p>
                        Learning styles are the unique ways in which individuals engage with learning. </p>

<p>It's about discovering how you best absorb and process information. </p>

<p>Whether you're a visual learner who thrives on images and diagrams,
     an auditory learner who absorbs information through listening, or a 
     kinesthetic learner who learns best through hands-on activities, understanding your 
     learning style is key to optimizing your educational experience.

                        </p>
                    </div>
                 </div>
                 <div className='col-12 col-xl-2 col-lg-2 col-md-2'></div>
            </div>
        </div>
      </section>

      <section className='py-5 about_two' style={sectionStyletwo}>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-xl-2'></div>
                <div className='col-12 col-xl-8 col-lg-8 col-md-8'>
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
                <div className='col-12 col-xl-2'></div>
            </div>
        </div>
      </section>

      <section className='py-5' style={sectionStylelst} >
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xl-2 col-lg-2 col-md-2'></div>
                    <div className='col-12 col-xl-8 col-lg-8 col-md-8'>
                        <div className='about_last'>
                            <h3>WHAT LEARNING STYLE ASSESSMENT OFFERS YOU?</h3>

                            
                        </div>
                     
                    </div>
                    <div className='col-12 col-xl-2 col-lg-2 col-md-2'></div>
                    <div className='col-12 col-xl-4 col-lg-4 col-md-4'>
                        <div className='benifits'>
                            <h2>BENEFITS</h2>
                            <ul className='list-unstyled pt-4'>
                               <li>Understanding learning style</li>
                               <li>Comprehension and analysis</li>
                               <li>Mental and emotional health</li>
                               <li>Self-awareness</li>
                               <li>Personal management</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-xl-4 col-lg-4 col-md-4'>
                        <div className='benifits'>
                            <h2>FOR STUDENT</h2>
                            <ul className='list-unstyled pt-4'>
                               <li>Identifies best approach for academic success</li>
                               <li><a href=''>Improves academic excellence</a></li>
                               <li>Note taking strategies for improved learning </li>
                               <li>Customised notes tailored to unique learning styles</li>
                               <li>Continuous monitoring and evaluation of performance</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-xl-4 col-lg-4 col-md-4'>
                        <div className='benifits'>
                            <h2>FOR PARENTS/GUARDIANS</h2>
                            <ul className='list-unstyled pt-4'>
                               <li>Helps child excel academically and personally</li>
                               <li>Enhanced comprehension and analytical abilities</li>
                               <li>Better mental and emotional health</li>
                               <li>Increased self awareness - “what works best for them”</li>
                               <li>Enhanced personal management </li>
                            </ul>
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