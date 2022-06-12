import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import img from './components/assets/backgound.webp';
import Nav from './components/navBar/navBar'
import Home from './components/home/home';
import Menu from './components/menu/menu'
const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  background-image: url(${img});
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(195, 195, 195);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function App() {

  return (
    <Router>
    <GlobalStyle />
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </Router>  );
}

export default App;
