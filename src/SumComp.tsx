import React from 'react';
import './App.css';
import { Sum, Operator } from './model/Sum';

export interface SumProps {
    value: Sum;
}

export class SumComp extends React.Component<SumProps> {

    private displayNumber(number: number, pos: number): string {
        if (pos === this.props.value.blank) {
            return "_____";
        }
        return number.toString();
    }

    render() {
        const {value} = this.props;  
        var operatorDisplay = <span>*</span>;
        if (value.operator===Operator.DIVIDE){
            operatorDisplay = <span dangerouslySetInnerHTML={{ __html: "&divide;"}}/>;
        }       
        return (
            <h3>
            {this.displayNumber(value.param1, 1)}&nbsp;
            {operatorDisplay}&nbsp;
            {this.displayNumber(value.param2, 2)}&nbsp;=&nbsp;
            {this.displayNumber(value.result, 3)}</h3>
        );
    }
}
//<span dangerouslySetInnerHTML={{ __html: {value.operator} }}/>
