import  'react'
import './block1.css'

const Block1 = () => {
  return (
    <div className='Block1'>
        <div>
            <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="" />
        </div>
        <div>
            <h1>Welcome to TheCocktailDB</h1>
            <p>An open, crowd-sourced database of drinks and cocktails from around the world.br <br />
            We also offer a free cocktail API for anyone wanting to use it.
            </p>
            <div >
                <button className='button1'>fee api</button>
                <button className='button2'>Go Premium</button>
            </div>
            <p>Click button above to upgrade free Cocktail API to premium. <br />
            $3 month and cancel anytime. Currently 248 supporters.
            </p>
        </div>
        <div>
            <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="" />
        </div>

    </div>
  )
}

export default Block1