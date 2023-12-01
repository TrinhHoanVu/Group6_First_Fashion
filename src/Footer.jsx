import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";
import { TbBrandGoogleMaps } from "react-icons/tb";

function Footer(clicked, value) {
    return (
        <div className={`footer-all`}>
            <div>
                <table className={`home-venue ${clicked ? 'clicked' : ''}`}>
                    <tr className={`home-venue-tr ${clicked ? 'clicked' : ''}`}>
                        <td style={{ width: '4%' }}></td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>HO CHI MINH OFFICE</td>
                        <td style={{ width: '35%' }} rowSpan={4}></td>
                        <td style={{ width: '4%' }}></td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>HA NOI OFFICE</td>
                    </tr>
                    <tr>
                        <td>
                            <TbBrandGoogleMaps className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            590  Cach Mang Thang 8, Ward 11, 3 District, <br />
                            Ho Chi Minh City
                        </td>
                        <td>
                            <TbBrandGoogleMaps className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            M09 - L12, Duong Noi New Urban Area, La Khe, <br />
                            Ha Dong District, Ha Noi
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FiMail className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            abcxyz@first.fashion.com.vn
                        </td>
                        <td>
                            <FiMail className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            abcxyz@first.fashion.com.vn
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FiPhone className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            0123.456.789
                        </td>
                        <td>
                            <FiPhone className={`home-footer-icon ${clicked ? 'clicked' : ''}`} />
                        </td>
                        <td className={`home-venue-detail ${clicked ? 'clicked' : ''}`}>
                            0123.456.789
                        </td>
                    </tr>
                </table>
            </div>
            <br /><br />
            <div className="home-social-page">
                <CiFacebook className={`home-footer-fbicon ${clicked ? 'clicked' : ''}`} />
                <FaXTwitter className={`home-footer-twicon ${clicked ? 'clicked' : ''}`} />
                <FaInstagram className={`home-footer-igicon ${clicked ? 'clicked' : ''}`} />
            </div>
            <br />
            <div className={`home-copyright ${clicked ? 'clicked' : ''}`}>
                Copyright <PiCopyright />  2023 First Fashion Inc. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;