import React from 'react';
import Hero from '../components/Hero';
import Accreditations from '../components/Accreditations';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import StudentPopup from '../components/StudentPopup';
import WorkflowSection from '../components/WorkflowSection';
import StudentOfferButton from '../components/StudentOfferButton';

const Home = () => {
  return (
    <>
      <Hero />
      <Accreditations />
      <FeaturedCourses />
      <WorkflowSection />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      <StudentPopup />
      <StudentOfferButton />
    </>
  );
};

export default Home;