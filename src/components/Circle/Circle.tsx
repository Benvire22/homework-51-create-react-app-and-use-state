import React from 'react';
import './Circle.css';

interface Props {
    number: number;
}

const Circle: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">{number}</div>
    );
};

export default Circle;