import React from 'react';
import './App.css';
import { Sum } from './model/Sum';
import { SumComp } from './SumComp';

export interface SheetColumnProps {
  questions: Array<Sum>;
}

export class SheetColumn extends React.Component<SheetColumnProps> {

  render() {

    var questionElements = this.props.questions.map(
      (sum, idx): JSX.Element => {
        return <tr><td><SumComp key={idx} value={sum}/></td></tr>
      });

    return (
      <div className="col-sm-4">
        <table className="table">
          {questionElements}
        </table>
      </div>
    );
  }
}
