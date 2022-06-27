import React from 'react'
import './about.css'
import Me from '../../assets/download (2).jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <img src={Me} alt='imahe not found' />

        </div>
        <div className='about_content'>
          <h4>
          The definite article is the word the.
          It limits the meaning of a noun to one 
          particular thing. For example, 
          your friend might ask,
           “Are you going to the party this weekend?” 
          The definite article tells you that 
          your friend is referring to a specific party 
          that both of you know about. 
          The definite article can be used with
           singular, plural, or uncountable nouns.
            Below are some examples of the definite 
            article the used in context:


          </h4>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>


        </div>

      </div>




    </section>
  )
}

export default About