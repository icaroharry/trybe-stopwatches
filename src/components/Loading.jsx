import styled from 'styled-components';

// Source: https://codepen.io/tiagofranco/pen/mKeyt
const Wrapper = styled.div`
  width: 206px;
  height: 117px;
  .clock {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border: solid 5px white;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    margin-top: -25px;
  }

  .hours {
    position: absolute;
    width: 50px;
    height: 5px;
    top: 22.5px;
    animation: spin 5s linear 0s infinite;
    &:before {
      content: "";
      height: 5px;
      width: 16px;
      position: absolute;
      right: 11px;
      background: white;
      border-radius: 5px;
    }
  }
  .minutes {
    position: absolute;
    width: 50px;
    height: 5px;
    top: 22.5px;
    animation: spin 0.41s linear 0s infinite;

    &:before {
      content: "";
      height: 5px;
      width: 22px;
      position: absolute;
      right: 5px;
      background: white;
      border-radius: 5px;
    }
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`;

function Loading() {
  return (
    <Wrapper>
      <div class="clock">
        <div class="minutes"></div>
        <div class="hours"></div>
      </div>
    </Wrapper>
  );
} 

export default Loading;