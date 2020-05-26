import React from 'react';
import './App.css';
import { Club } from './model/ClubCriteria';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface ClubCardProps {
  club: Club;
  onSelection: (club: Club) => void;
}

export class ClubCard extends React.Component<ClubCardProps> {

  handleClick(){
    this.props.onSelection(this.props.club);
  }

  render() {
    return (
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>{this.props.club.name} Club</Card.Title>
          <Card.Text>
            {this.props.club.description}
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick.bind(this)}>Select</Button>
        </Card.Body>
      </Card>
    );
  }
}