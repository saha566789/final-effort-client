import "./Banner.css"
import { FaPhoneAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <TypeAnimation
                    sequence={[
                        'ONLINE',
                        500,
                        'ONLINE INVENTORY', //  Continuing previous Text
                        500,
                        'ONLINE INVENTORY MANAGEMENT',
                        500,
                        'ONLINE INVENTORY',
                        500,
                        'ONLINE',
                        500,
                        '',
                        500,
                    ]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                <h2>Stay stocked for success</h2>
                <p>Efficient inventory management is crucial for businesses of all sizes, enabling them to optimize their operations and maintain a competitive edge in today's dynamic markets. </p>
                <button className="flex gap-1"><FaPhoneAlt className="mt-1" />contact us</button>
            </div>
        </div>
    );
};

export default Banner;