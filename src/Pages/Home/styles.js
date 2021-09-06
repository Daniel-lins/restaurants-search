import styled from 'styled-components';

export const Container =  styled.aside `background-color: ${({ theme: { colors } }) => colors.background};
width: 360px;
height: 100vh;
overflow-y: scroll;`;

export const Search = styled.section`
    display:flex;
    flex-direction: columm;
    justify-content: center;
    background-color: #ffffff;
    padding:16px;

    `