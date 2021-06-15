import styled, { css } from 'styled-components';

// Flexbox container
const Container = styled.div`
    display: flex;
    flex-flow: ${props => props.column ? 'column wrap' : 'row wrap'};
    width: 100%;
    margin: 0 auto 30px;
    max-width: 50em;
    padding-left: 15px;
    padding-right: 15px;
    ${props => props.center && css`
        align-items: center;
        justify-content: center;
    `}

    ${props => props.itemsAround && css`
        justify-content: space-around;
    `}

    ${props => props.itemsBetween && css`
        justify-content: space-between;
    `}
`;

export default Container;