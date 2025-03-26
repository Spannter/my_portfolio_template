import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Terreassa';
const jobTitle = 'Full stack developer';
const company = 'Currently working for Rapid Armored';
const mainDuty = 'As a Vault specialist ';
const jobLocation = 'NJ';
const briefJobDescription = 'Currently I am responsible for the receiving, tracking and shipping of financial packages to various customers. ';
const careerObjective = 'I am pursuing a challenging and creative career in full stack development and project management.';
const personalLife = '';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle}, {company} {mainDuty} located in {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;