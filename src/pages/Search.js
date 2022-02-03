import { useState } from "react"

export function Search(props) {
    const [word,setWord]=useState('')
    const [partOfSpeech,setPartOfSpeech]=useState('')
    const [defination,setDefination]=useState('')
    const [complete,setComplete]=useState(false)
    const [error,setError]=useState('')
    const [isError,setIsError]=useState(false)
    const handleSubmit=async(e)=>{
        const uri=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        e.preventDefault();
        try{
            setIsError(false)
            setError('')
            setComplete(false)
        const response = await fetch(uri)
        const data= await response.json()
        setPartOfSpeech(data[0].meanings[0].partOfSpeech);
        setDefination(data[0].meanings[0].definitions[0].definition)
            setComplete(true)
        }catch(err){
            setIsError(true)
           setError(err.message)
        }
    }
    return (
        <div className="w-full max-w-xl">
            <form className="" onSubmit={handleSubmit}>
                <h1 className="text-orange-500 font-semibold border-b-2 text-xl text-center mt-4">Search the meaning of a word:</h1>
                <div className="mb-4 mt-3">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="word">

                    Enter Word:
                    </label>
                    <input className="shadow shadowEffect appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-lg" id="word" type="text" required
                    value={word} onChange={(e)=>setWord(e.target.value)} />
                </div>

                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Search
            </button>
            {complete && 
            <div className="w-full max-w-lg border-2 mt-4 rounded-md p-3">
                <p className="text-orange-500 font-semibold text-lg inline">Part of speech :</p> <p className='inline text-gray-600'>{partOfSpeech}</p><br/>
                <p className="text-orange-500 font-semibold text-lg inline ">Definition :</p> <p className='inline text-gray-600'>{defination}</p>
                 
            </div>}
            {
                isError && 
                <div className="w-full max-w-lg border-2 mt-4 rounded-md p-3">
                    <p className="text-orange-500 font-semibold text-lg inline">No meaning found for this word !</p>
                     
                </div>
            }
            </form>
        </div>
    )
}
