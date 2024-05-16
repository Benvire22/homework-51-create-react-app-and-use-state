import './App.css'
import {useState} from "react";
import Circle from "./components/Circle/Circle";

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const changeNumbers = ():void => {
        const oldNumbers = [...numbers];
        const newNumbers:  number[] = [];

        while (newNumbers.length < 5) {
            const randomNum = Math.floor(Math.random() * 32) + 5;

            if (!oldNumbers.includes(randomNum) && !newNumbers.includes(randomNum)) {
                newNumbers.push(randomNum);
            }
        }
        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    };

  return (
    <>
        <button className="change-btn" onClick={changeNumbers}>Change numbers</button>
        <Circle number={numbers[0]} />
        <Circle number={numbers[1]} />
        <Circle number={numbers[2]} />
        <Circle number={numbers[3]} />
        <Circle number={numbers[4]} />
    </>
  );
};

export default App;
