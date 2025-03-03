import  "react";
import { useNavigate } from "react-router-dom";
import './Block3.css'

const Block3 = () => {
    const alphabet = "A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z".split("");
    const navigate = useNavigate();

    const handleClick = (letter) => {
        navigate(`/inputinfo/${letter}`);
    };

    return (
        <div className="alphabet-container">
            {alphabet.map((letter) => (
                <p 
                    key={letter} 
                    className="pfruj"
                    onClick={() => handleClick(letter)}
                    style={{ cursor: "pointer", margin: "5px", display: "inline-block" }}
                >
                    {letter}
                </p>
            ))}
        </div>
    );
};

export default Block3;
