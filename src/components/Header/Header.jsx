import  { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if(e.keyCode == 13) {
          navigate(`/inputinfo/${text}`)
          setText("")
        }
      }

    return (
        <div className='container'>
                <img 
                    src="https://www.themealdb.com/images/logo-small.png" 
                    alt="Logo" 
                    className="logo"
                    />
                <div className='nav-right'>
                    <button className='home-btn' onClick={() => navigate('/')}>Home</button>
                    <input 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        type="text" 
                        placeholder='Search by letter...' 
                        onKeyDown={handleKeyDown} 
                        className='imgjk'
                        />
                </div>
                <div className='burger'>
                </div>
                </div>
    );
}

export default Header;