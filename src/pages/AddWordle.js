import { useState } from "react"
import Select from "react-select"
import { useAuthContext } from "../hooks/useAuthContext"
import { useFirestore } from "../hooks/useFirestore"
const category=[
    {value:'dnf', label:'Did Not Solve'},
    {value:1, label:'1'},
    {value:2, label:'2'},
    {value:3, label:'3'},
    {value:4, label:'4'},
    {value:5, label:'5'},
    {value:6, label:'6'}
]
export function Addwordle(props) {
    
const [word,setWord]=useState('')
const [tries,setTries]=useState('')
const {addDocument,response}=useFirestore('wordle');
const {user}=useAuthContext()

const handleSubmit=async(e)=>{
    e.preventDefault();
    
    await addDocument({word,tries:tries.value,uid:user.uid})
   
    
}
    return (
        
        <div>
            <h1 className="text-orange-400 font-semibold text-xl text-center border-b-2">Paste Your Wordle Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-md" htmlFor="word">
                Wordle word:
                </label>
                <input className="shadow shadowEffect appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:shadow-lg" id="word" type="text" max="5" min="5" maxLength="5" minLength="5" required
                value={word} onChange={(e)=>setWord(e.target.value)} />
            </div>

            
                <div className="mb-4 mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-md" htmlFor="word">
                Number of tries you took:
                </label>
               <Select options={category} className="hover:shadow-lg shadowEffect"
               onChange={(option)=>{
                   const inputword=document.querySelector('#word')
                   if(option.value==='dnf'){
                        setTries(option)
                       setWord('NULLS')
                       inputword.setAttribute("disabled",true)
                   }else{
                    setTries(option)
                    inputword.removeAttribute('disabled')
                   }
                   
                }
            }
               ></Select>
            </div>
            {response.error && <p>{response.error}</p>}
            {!response.isPending && <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Wordle Data
            </button>}
            {response.isPending && <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" disabled>
              Adding Wordle Data...
            </button>}

            </form>
        </div>
    )
}
