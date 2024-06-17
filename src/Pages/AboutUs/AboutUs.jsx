
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className="about-section lg:h-[80vh] h-[120vh] py-20">
            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-5">Welcome to About Us</h2>
                        <p className="text-gray-700 text-lg">
                            Founded in 2012, <span className='bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text'>CircuitFlow</span> emerged from a desire to bridge the gap between complex inventory management systems and the needs of everyday businesses. We saw a market saturated with solutions that were either too expensive or too difficult to implement.
                        </p>
                        <p className="text-gray-700 text-lg font-bold">Our Mission:</p>
                        <ul className="list-disc lg:pl-4 pl-2 mt-2 text-start">
                            <li>Gain real-time visibility into stock levels</li>
                            <li>Reduce stockouts and overstocking</li>
                            <li>Optimize their supply chains</li>
                            <li>Improve forecasting and demand planning</li>
                            <li>Enhance operational efficiency</li>
                            <li>Gain valuable insights from data-driven reports</li>
                        </ul>
                       
                        <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="md:flex md:justify-center"
                    >
                        <img
                            src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                            alt="About Us Image"
                            className="w-full h-auto md:w-auto md:h-full rounded-lg shadow-md"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
