import  { Container, Search } from './styles' ;
import React from 'react';
import logo from '../../assets/logo.svg';
 

const Home = () =>  (

    <Container> 
        <Search> <img src={logo} alt="Logo do restaurante" /> </Search>
        <textField
        label="pesquisar"
        >

            <input
            value={this.state.value}
            onchange={e} => this.setState({ value:e.current.v})>
        </textField>

        </Container>
     
     );

export default Home;