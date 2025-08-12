import { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setMenu] = useState(false);
    
    const mobileMenu = `
        ${isMenuOpen ? "flex bg-blue-900/30 backdrop-blur-md" : "hidden"} 
        flex-col items-start 
        absolute top-full left-0 w-full md:w-auto
        p-3 z-10 

        md:flex md:flex-row md:static md:items-center 
        md:justify-end text-white gap-6
        `.trim();

        const hovereffect = `
        transition duration-200 hover:bg-gradient-to-b hover:from-lime-400 hover:to-green-500 hover:bg-clip-text hover:text-transparent
        `.trim();

    return(
        <nav className="relative rounded md:rounded-full bg-blue-900/30 backdrop-blur-md px-4 py-2 md:px-8 top-4 mb-10 flex justify-between max-w-screen-xl mx-auto items-center shadow-md">

            <div className="text-2xl bg-gradient-to-b from-lime-400 to-green-500 bg-clip-text text-transparent justify-center text-left ">
                <h2>SidCodes</h2>
            </div>


            <div className="md:hidden">
                <button  onClick={()=>{setMenu(!isMenuOpen)}}>
                    ☰
                </button>
            </div>

            
                <ul className={`${mobileMenu}`}>
                    <li><a className={`${hovereffect}`} href="#Projects">Projects</a></li>
                    <li><a className={`${hovereffect}`} href="#About">About</a></li>
                    <li><a className={`${hovereffect}`} href="#Skills">SkillSet</a></li>
                    <li><a className={`${hovereffect}`} href="#Connect">Connect</a></li>
                </ul>

        </nav>

    );
};

export default Navbar;