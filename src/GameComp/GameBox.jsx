import React from 'react'
import Square from './Square'
import '../All_CSS/GameBox.css'
import { useState } from 'react'
import '../All_CSS/justBtn.css'

export default function GameBox(props) {



    const [valueInside, setValueInside] = useState(Array(9).fill(null));
    const [isXturn, setisXturn] = useState(true);
    // const [infoShow, setinfoShow] = useState("");

    // console.log("val", valueInside);





    function handleClick(index) {
        const copyvalueInside = [...valueInside];

        copyvalueInside[index] = isXturn ? "X" : "O";

        setValueInside(copyvalueInside);
        setisXturn(!isXturn);
    }

    function checkWinner() {
        const winningArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let e of winningArray) {
            const [a, b, c] = e;
            if (valueInside[a] != null && valueInside[a] === valueInside[b] && valueInside[b] === valueInside[c] && valueInside[a] === valueInside[c]) {
                return valueInside[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    // console.log(isWinner);








    return (

        <div className="main">
            <div className='hash' >
                <Square changeIt={() => handleClick(0)} value={valueInside[0]} />
                <Square changeIt={() => handleClick(1)} value={valueInside[1]} />
                <Square changeIt={() => handleClick(2)} value={valueInside[2]} />

                <Square changeIt={() => handleClick(3)} value={valueInside[3]} />
                <Square changeIt={() => handleClick(4)} value={valueInside[4]} />
                <Square changeIt={() => handleClick(5)} value={valueInside[5]} />

                <Square changeIt={() => handleClick(6)} value={valueInside[6]} />
                <Square changeIt={() => handleClick(7)} value={valueInside[7]} />
                <Square changeIt={() => handleClick(8)} value={valueInside[8]} />

                {isWinner ?  (<>
                                <p id="info"> {isWinner + " Won the Game"}
                                <button onClick={() => {setValueInside(Array(9).fill(null))}}>Play Again</button>
                            </p>
                              </>) : 
                <p> {""}</p>}
            </div>
        </div>


    )
}
