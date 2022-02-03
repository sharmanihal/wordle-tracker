import { useState } from "react"
import { useSignUp } from "../hooks/useSignUp"

export function Signup() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [mail,setEmail]=useState('')
    const {signup,error,isPending}=useSignUp()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signup(mail,password,name)
    }
    return (
        <div className="w-full max-w-lg mt-5 ml-40">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-center font-semibold text-xl border-b-2 text-orange-400">Signup to Wordle</h1>
          <div className="mb-4 mt-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow shadowEffect appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:shadow-lg" id="username" type="text" required
            value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow shadowEffect appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:shadow-lg" id="password" type="password" required
            value={password} onChange={(e)=>setPassword(e.target.value)} />
            
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow shadowEffect appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:shadow-lg" id="email" type="email" required
            value={mail} onChange={(e)=>setEmail(e.target.value)} />
            
          </div>
          {error && <p>{error}</p>}
          <div className="flex items-center justify-between">
            {!isPending && <button className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>}
            {isPending && <button className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" disabled>
              Signing Up...
            </button>}
          </div>
        </form>
      </div>
    )
}
