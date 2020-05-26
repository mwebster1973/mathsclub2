import React from 'react';
import './App.css';
import { Club } from './model/ClubCriteria';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SumGenerator, splitInto } from './model/SumGenerator';

import { SheetColumn } from "./SheetColumn";

export interface SheetProps {
    club: Club;
  }
  
export class Sheet extends React.Component<SheetProps> {

render() {

  const generate = new SumGenerator(this.props.club);
  
  const sums = generate.generateSums();
  const sumsPerCol = splitInto(sums,2)

  return (
    <Container>
      <Row>
         <h1>{this.props.club.name} Club</h1>
      </Row>
      <Row>
         <h5>{this.props.club.description}</h5>
      </Row>
      <Row><br/></Row>
      <Row>
        <SheetColumn key={1} questions={sumsPerCol[0]}/>
        <SheetColumn key={2} questions={sumsPerCol[1]}/>
      </Row>  
    </Container>
  );
}}
