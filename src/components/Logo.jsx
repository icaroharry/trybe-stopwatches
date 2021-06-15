import styled from 'styled-components';
import trybeLogo from '../img/trybe-logo.png';
import Title from './Title';

// Flexbox container
const Wrapper = styled.div`
  width: 20rem;
  img {
    width: 3.5rem;
    margin-left: 75%;
    margin-bottom: -1rem;
  }
`;

function Logo() {
  return (
    <Wrapper>
      <img src={ trybeLogo } alt="Trybe" />
      <Title>
        Cronômetros
      </Title>
    </Wrapper>
  );
} 

export default Logo;