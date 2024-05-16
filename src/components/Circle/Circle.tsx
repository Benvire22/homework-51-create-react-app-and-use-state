import React from 'react';
import './Circle.css';

interface Props {
    number: number;
}

const Circle: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">
            <span className="circle-number">{number}</span>
        </div>
    );
};

export default Circle;