import React from 'react';
import './App.css';
import { Club, CLUB_11, CLUB_22, CLUB_33, CLUB_44, CLUB_55, DECIMAL_CLUB, CLUB_99, CLUB_88, CLUB_77, CLUB_66 } from './model/ClubCriteria';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import { ClubCard } from './ClubCard';

export interface SelectClubProps {
  onSelection: (club: Club) => void;
}

export class Home extends React.Component<SelectClubProps> {

  render() {

    return (
      <Container>
        <Jumbotron>
          <h1>Maths Club</h1>
          <p>Learn the times tables - a little bit each day!</p>
          <p>Start with the 22 club, each day print out and complete the questions. For 4 days a week, the sheet is not timed, its just for fun. However, on the 5th day you have 10 minutes to complete the questions. If you get all the questions right, you move up a club.</p>
        </Jumbotron>
        <Row>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_11}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_22}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_33}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_44}></ClubCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_55}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_66}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_77}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_88}></ClubCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={CLUB_99}></ClubCard>
          </Col>
          <Col>
            <ClubCard onSelection={this.props.onSelection} club={DECIMAL_CLUB}></ClubCard>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
