import { list } from "postcss";
import Link from "../link/Link";
import {AiOutlineMenuUnfold,AiOutlineClose} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
      console.log(routes);
      
    return (
        <nav>
            
            
            <div className="md:hidden" onClick={()=>setOpen(!open)} >
            
            {
                open===true?<AiOutlineClose className="text-xl "></AiOutlineClose>:<AiOutlineMenuUnfold className="text-xl "></AiOutlineMenuUnfold>
            }
            </div>
            <ul className={`md:flex duration-1000 absolute items-center gap-6 ${open?'top-12':'-top-60'}`}
            >

               {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;