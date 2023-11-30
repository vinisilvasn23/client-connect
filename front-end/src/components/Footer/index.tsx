import { CustomFooter } from "./styled";
import { BiLogoFacebook } from "react-icons/bi"
import { FaInstagram, FaTwitter } from "react-icons/fa"

export const Footer = () => (
    <CustomFooter>
        <div className="logoContainer">
            <h2>Client Connect</h2>
        </div>
        <div className="separator"></div>
        <div className="infoContainer">
            <span>&copy; 2023 Client Connect, Todos os direitos reservados.</span>
            <div className="iconContainerIcons">
                <span className="icon"><FaTwitter/></span>
                <span className="icon"><FaInstagram/></span>
                <span className="icon"><BiLogoFacebook/></span>
            </div>
        </div>
    </CustomFooter>
)