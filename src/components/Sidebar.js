import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

export function Sidebar() {
    const {logout}=useLogOut();
const {user }=useAuthContext()
    return (
        <div className=''>
            <ul className="text-left grid grid-cols-1 mr-5">
                {!user && <li className="my-4"><Link to="/login" className="pill shadowEffect">
                    <span>Login
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    </span>
                    
                    </Link></li>}

        {!user && <li><Link to="/signup" className="pill shadowEffect">
            <span >Signup
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
            </span>
            
            </Link></li>}

                    <li className="my-4"><Link to="/contact-us" className="pill shadowEffect">
                    <span>Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                    </span>
                   
                    </Link></li>
                    {!user &&
                    <li className=""><Link to="/" className="pill shadowEffect">
                    <span>Home
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                   </span>
                    </Link></li>
}

{user &&
                    <li className=""><Link to="/dashboard" className="pill shadowEffect">
                    <span>Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
</svg>
                   </span>
                    </Link></li>
}

{user &&
                    <li className="my-4"><Link to="/add" className="pill shadowEffect">
                    <span>Add Wordle
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                   </span>
                    </Link></li>
}
{user &&
                    <li className=""><Link to="/search" className="pill shadowEffect">
                    <span>Search Meaning
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                   </span>
                    </Link></li>
}
                    
{user &&
                    <li className="my-4"><button onClick={logout} className="logoutPill shadowEffect">
                    <span className="w-full">Logout
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
                   </span>
                    </button></li>
}


            </ul>
        </div>
    )
}
