/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';
import Experience from 'components/Experience/Experience';
import Repository from 'components/Repository/Repository';
import FooterText from 'components/FooterText/FooterText';

import { device, until } from 'utilities/mixins';
import { findImageByName } from 'utilities/utilities';
import Badges from 'sass/Badges';
import Projects from 'sass/Projects';

import './index.scss';

const Container = styled.section`
  padding: 0 25px;

  ${until(
    device.iPhone(),
    () => `
		padding: 0 16px;
	`
  )};

  .experiences {
    ${until(
      device.iPhone(),
      () => `
		.react-masonry-column {
			width: 100% !important;
		}
	`
    )};

    .experience {
      padding-bottom: 10px;

      &:last-child {
        padding-bottom: 0;
      }

      ${until(
        device.iPhone(),
        () => `
				padding-bottom: 0;
			`
      )};
    }
  }

  .reviews {
    width: 95%;

    ${until(
      device.iPhone(),
      () => `
		width: 100%;

		.react-masonry-column {
			width: 100% !important;
		}
	`
    )};

    blockquote {
      padding: 10px;

      ${until(
        device.iPhone(),
        () => `
			padding: 0;
		`
      )};
    }
  }
`;

const Work = (props) => (
  <Container>
    <h2 className="title">Work Experience</h2>
    <p className="subtitle">
      Please read my{' '}
      <a
        href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
        id="resume"
      >
        resume
      </a>
      {' and connect with me on '}
      <a
        href="https://linkedin.com/in/nicholas-adamou/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
        id="linkedin"
      >
        LinkedIn
      </a>
      .
    </p>

    {Experience(
      'IBM',
      'Staff Software Engineer',
      'Southbury, CT',
      'May 2021 - Present',
      () =>
        "Leads the software development team for IBM’s cloud-native ledger software. Works on cross-functional teams to enhance the journaling software. Leverages modern technologies to bring a new modern face to IBM's ledger application. Integrated Apache POI to dynamically handle Excel document generation and parsing. Incorporated IBM Watson to construct a full stack chatbot application to handle user queries. Utilized Box and Java Springboot to stream video/image content to chatbot. Incorporated JWT authentication for meaningful user context. Implemented system for dynamically handling toast-style notifications. Led performance improvements initiative which led to an overall performance gain of ~60%. Acts as a software librarian for IBM's departmental software handling production deployments.",
      findImageByName('ibm.png', props.logos)
    )}

    {Experience(
      'IBM',
      'Associate Software Engineer',
      'Southbury, CT',
      'June 2019 - May 2021',
      () =>
        "Works on cross-functional teams to enhance IBM's ledger and departmental software. Developed various key front-end and back-end services. Integrated IBM Carbon Design system (React) as base design system for IBM's ledger software. Constructed documentation surrounding each of the ledger's micro-service's API utilizing Swagger. Utilized IBM SSO, JWT, and React Redux to securely authenticate users. Integrated dynamic session timeout handling for user sessions. Utilized cron jobs, Hibernate, and Java Springboot to automate the clean-up of user PI data within IBM's departmental software.",
      findImageByName('ibm.png', props.logos)
    )}

    {Experience(
      'Blackbird',
      'Software Engineering Intern',
      'San Francisco, CA',
      'June 2018 - August 2018',
      () =>
        "Worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging React, React Native, React Native Web, GraphQL, and Apollo. Provided Quality Assurance and unit testing on multiple builds of the Blackbird web and mobile apps.",
      findImageByName('blackbird.png', props.logos)
    )}

    <h2 className="title" style={{ fontSize: '1.6rem' }}>
      Projects
    </h2>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      Various projects that I've open sourced while working at these companies.
    </p>

    <Projects>
      {Repository('nicholasadamou', 'down-to-network', 'react')}
      {Repository('nicholasadamou', 'firebase-react-starter-kit', 'react')}
      {Repository('nicholasadamou', 'watson-chatbot', 'angular')}
      {Repository('nicholasadamou', 'react-iframe', 'react')}
      {Repository('nicholasadamou', 'node-cache', 'node')}
      {Repository('nicholasadamou', 'storage', 'react')}
      {Repository('nicholasadamou', 'krios-github-bot', 'node')}
      {Repository('nicholasadamou', 'toasty', 'react')}
      {Repository('nicholasadamou', 'jwt-spring-security-demo', 'java')}
    </Projects>

    <h3 className="title" style={{ fontSize: '1.6rem' }}>
      Badges and Certifications
    </h3>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      More can be found at my{' '}
      <a
        href="https://www.youracclaim.com/users/nicholas-adamou/badges"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        youracclaim
      </a>{' '}
      page.
    </p>

    <Badges>
      {Experience(
        'IBM',
        'IBM Developer JumpStart Explorer',
        '',
        '5 February 2021',
        () =>
          'The IBM Developer Jumpstart badge ensures an understanding of key skills and knowledge required by software and hardware developers to apply core practices such as IBM Design Thinking and agile to their work, and have taken steps to build their skills and experiences as developers through a 4 module set of e-Learning.',
        'https://images.youracclaim.com/size/340x340/images/9fa05621-437d-44ba-8ea5-ecd611e5cde5/IBM-Developer-Jumpstart-Explorer.png'
      )}
      {Experience(
        'IBM',
        'IBM Developer JumpStart Practitioner',
        '',
        '25 January 2021',
        () =>
          "The earner has acquired a practical knowledge of IBM Design Thinking, Agile Software development/Project management skills and practical development (coding/designing) skills. They have also demonstrated the ability to use and implement components of IBM's Cloud Computing offerings to solve valid business challenges within IBM. As a Practitioner, the badge earner has demonstrated the ability to to work as a team, with their Stakeholders to deliver well designed solutions to business challenges.",
        'https://images.youracclaim.com/size/680x680/images/a65e1c69-32c0-4b7f-8222-3d3c340f252c/IBM-Developer-Jumpstart-Practitioner.png'
      )}
      {Experience(
        'IBM',
        'Beyond the Basics: Istio and IBM Cloud Kubernetes Service',
        '',
        '19 June 2020',
        () =>
          'The badge earner can install Istio in a cluster, deploy a sample app, and set up the Istio Ingress controller. The individual knows how to use metrics, logging and tracing to observe services. The earner is also able to perform simple traffic management such as A/B tests and canary deployments, secure a service mesh, and enforce policies for microservices.',
        'https://images.youracclaim.com/size/680x680/images/8d34d489-84bf-4861-a4a0-9e9d68318c5c/Beyond%2Bbasics%2Bof%2BIstio%2Bon%2BCloud%2Bv2.png'
      )}
    </Badges>

    {FooterText(
      'Read more about my work experience on my ',
      'LinkedIn',
      'https://linkedin.com/in/nicholas-adamou/',
      'linkedin'
    )}
  </Container>
);

export default Work;
