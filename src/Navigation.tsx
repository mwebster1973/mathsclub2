import React from 'react';
import { useHistory } from "react-router-dom";
import { Club, CLUB_11, CLUB_22, CLUB_33, CLUB_44, CLUB_55, DECIMAL_CLUB, CLUB_99, CLUB_88, CLUB_77, CLUB_66 } from './model/ClubCriteria';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export interface NavigationProps {
    onSelection: (club: Club) => void;
}

export function Navigation(props: NavigationProps) {
    const history = useHistory();

    function handleClick(event: React.MouseEvent<HTMLElement>, club:Club) {
        props.onSelection(club);
        history.push("sheet");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/mathsclub2">Maths Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Select Club" id="SelectClub">
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_11)}>Club 11</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_22)}>Club 22</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_33)}>Club 33</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_44)}>Club 44</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_55)}>Club 55</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_66)}>Club 66</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_77)}>Club 77</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_88)}>Club 88</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, CLUB_99)}>Club 99</NavDropdown.Item>
                        <NavDropdown.Item onClick={(e: any) => handleClick(e, DECIMAL_CLUB)}>Decimals Club</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
} 