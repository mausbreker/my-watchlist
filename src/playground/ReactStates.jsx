import { useState } from "react";

const ReactStates = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");
    const [num, setNum] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);
    const [numberSqaure, setNumberSqaure] = useState(0);
    
    const increment = () => setNumber(number + 1);

    const squareNumber = (e) => {
        const value = e.target.value;
        const valueSqaured = value**2;
        
        setInputNumber(value);
        setNumberSqaure(valueSqaured);
    };
    
    return (
        <>
            <input type="text" onChange={squareNumber} />
            <h1>Kvadrat broja {inputNumber} je {numberSqaure} </h1>

            <h1 onMouseEnter={() => setNum(num + 1)}>React states</h1>
            <h2>{num}</h2>

            <input type="text" onChange={(e) => setName(e.target.value)} />
            <h2>{name}</h2>

            <div>
                <u>{number}</u>
            </div>

            <button onClick={increment}>
                Uvećaj za 1
            </button>

            <button onClick={() => setNumber(number + 2)}>
                Uvećaj za 2
            </button>

            <button onClick={() => setNumber(number - 1)}>
                Umanji za 1
            </button>

            <button onClick={() => setNumber(0)}>
                Restart
            </button>

            <hr />
        </>
    )
}

export default ReactStates;