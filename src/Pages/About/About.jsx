import imgePic from "../../assets/1714359282802.gif"

const About = () => {
    return (
        <div className="hero h-[50vh] lg:my-4 my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={imgePic} className="lg:w-[50%] lg:h-52 rounded-lg shadow-2xl" />
          <div>
            <h1 className="lg:text-5xl font-bold">More about <span className="text-red-200 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">CircuitFlow</span>!</h1>
            <p className="py-6 text-sm lg:text-[16px]">Welcome to  <span className="text-red-400 font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">CircuitFlow</span>, your trusted partner in efficient inventory management. At  <span className="text-red-400 font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">CircuitFlow</span>, we understand the pivotal role that inventory plays in the success of any business. Our mission is to simplify and streamline the inventory process, empowering businesses to focus on what they do best.</p>
            <p className="text-sm lg:text-[16px]">At the heart of  <span className="text-red-400 font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">CircuitFlow</span> is a team of passionate individuals dedicated to revolutionizing the way businesses handle their inventory. With a perfect blend of technology enthusiasts, business experts, and customer-focused professionals, we strive to provide a comprehensive solution tailored to your unique needs.</p>
          </div>
        </div>
      </div>
    );
};

export default About;