import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection"

export function Dashboard() {
    
    const {documents,isPending}=useCollection('wordle');
    const [docLength,setDocLength]=useState('')
    const [average,setAverage]=useState('0')
    const [won,setWon]=useState('0')
    const [lost,setLost]=useState('0')
    useEffect(()=>{
        setAverage('')
        setDocLength(documents?.length)
        let averageTries=0
        let won=0;
        let lost=0;
        documents?.forEach(doc=>{
            if(doc.tries!=='dnf'){
                averageTries+=doc.tries;
                
                won++;
                setWon(won.toString())
            }else{
                
                lost++;
                setLost(lost.toString())
            }
        })
        averageTries=averageTries/docLength
        setAverage(Math.floor(averageTries).toString())
    },[documents,docLength,average,won,lost])

    return (
        <div>
        {!isPending &&
        <div> <h1 className="text-center text-orange-500 text-2xl font-semibold border-b-2 ">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
            
            <div className="card hover:shadow-lg">
                <h1 className="text-orange-500 text-lg font-semibold text-center border-b-2">Number of time you have played wordle</h1>
                <p className="text-center text-gray-500 text-2xl mt-2">{docLength}</p>
            </div>

            <div className="card hover:shadow-lg">
                <h1 className="text-orange-500 text-lg font-semibold text-center border-b-2">Average number of tries taken to solve</h1>
                <p className="text-center text-gray-500 text-2xl mt-2">{average}</p>
            </div>
            <div className="card hover:shadow-lg">
                <h1 className="text-orange-500 text-lg font-semibold text-center border-b-2">Number of wordle you have won</h1>
                <p className="text-center text-gray-500 text-2xl mt-2">{won}</p>
            </div>
            <div className="card hover:shadow-lg">
                <h1 className="text-orange-500 text-lg font-semibold text-center border-b-2">Number of wordle you have Lost</h1>
                <p className="text-center text-gray-500 text-2xl mt-2">{lost}</p>
            </div>
        </div>
        </div>}

        </div>
    )
}
