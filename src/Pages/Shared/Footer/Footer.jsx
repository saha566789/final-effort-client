
import logoPic from "../../../assets/inventory-management-4.png"
const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-neutral text-neutral-content mt-96 lg:mt-0">
              
                    <aside>
                    <img className="w-10" src={logoPic} alt="" />
                        <p className="font-bold text-xl">CircuitFlow <br></br> <span className="text-xs">Address:1/12,elephant road,Dhaka</span></p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Product Management</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                
            </div>
            <div className="p-4 footer-center bg-gray-700 text-white">
                <div>
                    <p className="lg:text-lg text-xs">Copyright © 2023 - All right reserved by CircuitFlow.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;