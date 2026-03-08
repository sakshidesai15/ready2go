import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process as ProcessSection } from '../components/Process';
import { Countries } from '../components/Countries';
import { LatestUpdates } from '../components/LatestUpdates';
import { Contact as ContactSection } from '../components/Contact';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Partners } from '../components/Partners';
import { ReferralCTA } from '../components/ReferralCTA';
import { TrustElements } from '../components/TrustElements';

export const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <TrustElements />
      <Services />
      <Countries />
      <Stats />
      <WhyChooseUs />
      <ReferralCTA />
      <ProcessSection />
      <Testimonials />
      <LatestUpdates />
      <ContactSection />
    </>
  );
};
