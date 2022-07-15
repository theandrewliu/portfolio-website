import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm always thinking about different ways the things around me can be improved to increase efficiency or functionality. I'm a collaborative, problem-solving full-stack engineer who enjoys the new technologies used to build valuable products for users. Through my experience working in a fast-paced startup where each day was different than the one before, being adaptable and comfortable with change was required. With this exposure to an environment that shifted constantly, I'm confident in my ability to adapt to new platforms, languages, and tools I use as a software engineer.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/theandrewliu'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;