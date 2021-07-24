import styled from 'styled-components';

import { device, until } from '../utilities/mixins';

const Badges = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-content: center;

  margin: 0 2rem;

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;
		grid-gap: initial;

		margin: 0;
	`
  )}
`;

export default Badges;
