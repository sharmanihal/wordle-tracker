import wordlee from "../assets/wordlee.png"
import { Link } from 'react-router-dom'
export function Homepage() {
    

    return (
        <div>
            <h1 className="font-semibold text-green-600 border-b-2 text-2xl">Welcome to the world of wordle</h1>
            <p className='mt-4'>Here you can save your wordle progress, update you wordle progress and get the meanings of the word you solve.</p>

            <div className='mt-4 hover:shadow-lg shadowEffect'>
                <div className="flex border-2 rounded-md p-2">
                    <img className='inline w-44 h-44' src={wordlee} alt="wordlee.png"></img>
                    <p className="inline px-5">Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle, formerly an employee of Reddit. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. The mechanics are nearly identical to the 1955 pen-and-paper game Jotto and the US television gameshow Lingo. Wordle has a single daily solution, with all players attempting to guess the same word.</p>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-xl text-green-600 mt-6 text-center border-b-2">What do we offer ?</h2>
                <div className="grid grid-cols-3 gap-6 mt-5">
                    <div className="card hover:shadow-lg ">
                        <h1 className="font-semibold text-xl text-center text-orange-500 border-b-2">Save you wordle</h1>
                        <p className="pt-2">Using our save wordle you can save your wordle progrees and check it whenever you want.</p>
                    </div>
                    <div className="card hover:shadow-lg">
                        <h1 className="font-semibold text-xl text-center text-orange-500 border-b-2">Search you wordle</h1>
                        <p className="pt-2">Using our search wordle you can search the meaning of the wordle you solved.</p>
                    </div>
                    <div className="card hover:shadow-lg">
                        <h1 className="font-semibold text-xl text-center text-orange-500 border-b-2">Track you wordle</h1>
                        <p className="pt-2">Using our Track wordle you can track your wordle progress.</p>
                    </div>

                </div>

                <div>
                    <h2 className="font-semibold text-xl text-green-600 mt-6 text-center border-b-2">Everthing is free. No Charges.</h2>
                    <div className="grid grid-cols-2 gap-6 mt-5">
                    <Link className="card hover:shadow-lg" to="/login">
                        <div className="font-semibold text-xl text-center  text-orange-500 border-b-2" >Login to wordle</div>
                        <p className="text-center mt-2">Login to wordle to check you progress</p>
                        
                    </Link>
                    <Link className="card hover:shadow-lg" to="/signup">
                        <div className="font-semibold text-xl text-center  text-orange-500 border-b-2" >Signup to wordle</div>
                        <p className="text-center mt-2">Sigun to wordle and get started</p>
                        
                    </Link>
                    

                </div>
                </div>
            </div>
        </div>
    )
}
