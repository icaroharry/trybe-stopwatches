import styled from 'styled-components';
import GithubImg from '../img/github.svg';
import GroupImg from '../img/group.svg';
import UserImg from '../img/user.svg';
import LinkImg from '../img/link.svg';
import { useContext, useEffect, useState } from 'react';
import StopwatchContext from '../context/StopwatchContext';
import Loading from './Loading';

// Flexbox container
const Wrapper = styled.section`
  width: 200px;
  border-radius: 0.5rem;
  background-color: #434343;
  margin: 1rem;
  line-height: 1rem;
  background: linear-gradient(145deg, #333333, #2b2b2b);
  box-shadow: 0 2px 6px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  z-index: 1;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 12px 16px rgba(0,0,0,0.24), 0 6px 16px rgba(0,0,0,0.36);
  }
`;

const Info = styled.section`
  padding: 1rem;
  position: absolute;
  margin-top: -100px;
  transition: opacity 0.2s;
  opacity: ${props => props.fade ? 1 : 0};
`;

const BackgroundImage = styled.img`
  filter: ${ (props) => props?.blur ? 'blur(10px)' : 'none' } brightness(30%);
  transition: filter 0.2s;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  transform: scale(1.03);
  border-radius: 0.5rem;
`;

const Title = styled.p`
  padding-top: 0.5rem;
  padding-left: 1rem;
  margin: 0;
  position: absolute;
  z-index: 1;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
  transition: opacity 0.2s;
  opacity: ${props => props.fade ? 1 : 0};
`;

const Subtitle = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`;

const Paragraph = styled.span`
  font-size: 0.8rem;
  line-height: 1rem;
  a {
    color: #fff;
  }
`;

const Icon = styled.img`
  height: 0.8rem;
  width: 0.8rem;
  margin-right: 0.3rem;
`;

function Card(props) {
  const [image, setImage] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const { filters: { textFilter } } = useContext(StopwatchContext);

  useEffect(() => {
    async function fetchPicture() {
      const result = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_APIFLASH_KEY}&url=${props.url}`)
        .then(res => res.blob());
      
      setImage(URL.createObjectURL(result));
    };

    fetchPicture();
  }, []);

  useEffect(() => {
    if(textFilter !== '') {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  }, [textFilter]);

  return (
    <Wrapper
      onClick={() => window.open(props.url, '_blank')}
      onMouseEnter={ () => setShowInfo(true) }
      onMouseLeave={ () => textFilter === '' && setShowInfo(false) }
    >
      <Title fade={ showInfo }>{props.repositoryUrl.split('https://github.com/')[1].split('/')[1]}</Title>
      {image ? <BackgroundImage blur={showInfo} src={image} /> : <Loading />}
      {(
        <Info fade={ showInfo }>
          <Subtitle>
            <Icon src={UserImg} alt="user icon" />
            {props.student}
          </Subtitle> <br />
          <Icon src={GroupImg} alt="grop icon" />
          <Paragraph>{`Turma ${props.cohort}`}</Paragraph> <br />
          <Icon src={LinkImg} alt="link icon" />
          <Paragraph>
            <a
              onClick={(ev) => ev.stopPropagation()}
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >Link</a>
          </Paragraph> <br />
          <Icon src={GithubImg} alt="github icon" />
          <Paragraph>
            <a
              onClick={(ev) => ev.stopPropagation()}
              href={props.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >Repository</a>
          </Paragraph> <br />
        </Info>
      )}
    </Wrapper>
  );
} 

export default Card;
