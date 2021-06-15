import styled from 'styled-components';

// Flexbox container
const Wrapper = styled.div`
  p {
    color: #dadada95;
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <p>
        Não há nada para ser exibido 😬
      </p>
    </Wrapper>
  );
} 

export default NotFound;