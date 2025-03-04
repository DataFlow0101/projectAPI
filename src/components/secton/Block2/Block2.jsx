import 'react'
import './Block2.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Block2 = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate(`/inputinfo/${text}`);
            setText('');
        }
    };
  return (
    <div>
        <div className='cikl'></div>
        <div className='center'>
        <div>
            <input type="text" placeholder='Search for a Cocktail...' 
            className='input2'
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown} 
             />
            
        </div>
        <div className='pfkl'>
            <p>Total Drinks: 636</p>
            <p>Total Ingredients: 489</p>
            <p></p>
            <p>Drink Images: 636(93cc)</p>
        </div>
        </div>
        <div className='cikl'></div>
    </div>
  )
}

export default Block2