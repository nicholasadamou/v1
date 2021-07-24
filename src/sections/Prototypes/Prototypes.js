/* eslint-disable import/no-unresolved */
import React from 'react';

import styled from 'styled-components';

import FooterText from 'components/FooterText/FooterText';
import Pen from 'components/Pen/Pen';

import { device, until } from 'utilities/mixins';

const Pens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  text-align: left;

  margin: 1rem 25px;

  ${until(
    '956px',
    () => `
		grid-template-columns: 1fr 1fr;

		margin: 2rem;
	`
  )}

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;

		margin: 0;
	`
  )}
`;

const Prototypes = () => (
  <section>
    <h2 className="title">Prototypes</h2>
    <p className="subtitle">Experiments I've done in various technologies.</p>

    <Pens>
      {Pen(
        'Low Poly Earth',
        'THREE.js implementation of the Earth using only polygons.',
        'https://codepen.io/nicholasadamou/pen/xQKxgN'
      )}
      {Pen(
        'Star Field',
        'A multi-layered star-field constructed using ES6 JavaScript.',
        'https://codepen.io/nicholasadamou/pen/QZVddm'
      )}
      {Pen(
        'Matrix',
        'The matrix text effect implemented using ES6 JavaScript.',
        'https://codepen.io/nicholasadamou/pen/oaQMZV'
      )}
      {Pen(
        'Easy React Modal with Hooks',
        'Create a React-based modal using react-hooks and react-portals.',
        'https://codepen.io/nicholasadamou/pen/NQXxmL'
      )}
      {Pen(
        'Angled Edge SASS Mixin',
        'A SASS mixin for creating an angled div.',
        'https://codepen.io/nicholasadamou/pen/yvbXvQ'
      )}
      {Pen(
        'Terminal Shell',
        "A terminal-like-webpage based off of Darren Kitchen's website.",
        'https://codepen.io/nicholasadamou/pen/gwmAGX'
      )}
    </Pens>

    {FooterText(
      'More can be found on my ',
      'CodePen',
      'https://codepen.io/nicholasadamou',
      'codepen'
    )}
  </section>
);

export default Prototypes;
