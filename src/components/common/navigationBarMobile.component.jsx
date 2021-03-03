import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavigationBarMobile = ({ isOpen, toggleNavbar }) => {
    var value = isOpen ? 220 : -250
    //  console.log(x)
    return (
        <motion.div animate={{ x: value }} transition={{ ease: "easeOut", duration: 0.7 }} initial={false} className='absolute z-50 w-30screen  h-90screen' >
            <div className="  nav-bar-mobile  bg-secondary   w-70screen  h-92screen " id='nav-bar-mobile'>
                <div className="menu-item  flex flex-col text-base ">
                    <Link className="nav mx-10 sm:mx-6 my-7 text-white  " to="/">
                        <div onClick={() => {toggleNavbar(false)}}>Menu</div>
                    </Link>
                    <Link className="nav-item mx-10 sm:mx-6  text-white " to="/onBoarding" >
                        <div onClick={() => {toggleNavbar(false)}}>Account</div>
                    </Link>
                </div>
            </div>
        </motion.div>

    )
}

export default NavigationBarMobile;

/*
<motion.div animate={{x: x}} transition={{ ease: "easeOut", duration: 1 }} className='absolute w-70screen z-10 h-92screen '>
            <div className="nav-bar-mobile absolute  bg-secondary transform-gpu w-70screen h-92screen  transition-transform duration-1000" id='nav-bar-mobile'>
                <div className="menu-item  flex flex-col text-base ">
                    <Link className="nav mx-10 sm:mx-6 my-7 text-white  " to="/">
                        Menu
                </Link>
                    <Link className="nav-item mx-10 sm:mx-6  text-white " to="/cart">
                        Account
                </Link>
                </div>
            </div>
        </motion.div>


         <div className="nav-bar-mobile   bg-secondary transform-gpu w-70screen  h-92screen  transition-transform duration-1000" id='nav-bar-mobile'>
                <div className="menu-item  flex flex-col text-base ">
                    <Link className="nav mx-10 sm:mx-6 my-7 text-white  " to="/">
                        Menu
                </Link>
                    <Link className="nav-item mx-10 sm:mx-6  text-white " to="/cart">
                        Account
                </Link>
                </div>
            </div>
*/