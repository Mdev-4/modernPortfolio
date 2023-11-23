import { Link } from "react-router-dom"
import  {socialLinks}  from "../constants"

const Footer = () => {
  return (
    <footer className="footer font-poppins">
        <hr  className="border-slate-200"/>
        <div className="footer-container">
            <p className="text-white">
           © 2023 <strong>Mouhamed Lo</strong>. All Rights Reserved.       
            </p>
            <div>
                {socialLinks.map((link) =>(
                    <Link key={link.name} to={link.link} target='_blanc'>
                        <img 
                        src={link.iconUrl}
                        alt={link.name}
                        className="w-6 h-6 object-contain"
                        />
                    </Link>
                ) )}
            </div>
        </div>
    </footer>
  )
}

export default Footer