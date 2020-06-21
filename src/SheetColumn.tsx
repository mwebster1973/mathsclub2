import React from 'react';
import './App.css';
import { Sum } from './model/Sum';
import { SumComp } from './SumComp';

export interface SheetColumnProps {
  questions: Array<Sum>;
}

export function SheetColumn(props: SheetColumnProps) {
  const {questions} = props;
  return (
    <div className="col-sm-4">
      <table className="table">
        {questions.map(
          (sum, idx): JSX.Element => {
            return <tr><td><SumComp key={idx} value={sum} /></td></tr>
          })}
      </table>
    </div>)
}
