import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return(
<div> 
<Navbar className="header-topo no-background" data-bs-theme="dark">
        <Container className="no-background">
          <Navbar.Brand href="/">Stocks</Navbar.Brand>
        </Container>
      </Navbar>
    
</div>
    );
}

export default Header;
