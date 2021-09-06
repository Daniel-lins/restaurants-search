import  { Container, Search } from './styles' ;
import React from 'react';
import logo from '../../assets/logo.svg';
 

const Home = () =>  (

    <Container> 
        <Search> <img src={logo} alt="Logo do restaurante" /> </Search>
        </Container>
     
     );

export default Home;