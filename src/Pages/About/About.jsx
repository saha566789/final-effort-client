import imgePic from "../../assets/images (1).jpg"

const About = () => {
    return (
        <div className="hero h-[50vh] my-4 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={imgePic} className="w-[50%] h-52 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">More about <span className="text-red-200">CircuitFlow</span>!</h1>
            <p className="py-6">Welcome to  <span className="text-red-400 font-semibold">CircuitFlow</span>, your trusted partner in efficient inventory management. At  <span className="text-red-400 font-semibold">CircuitFlow</span>, we understand the pivotal role that inventory plays in the success of any business. Our mission is to simplify and streamline the inventory process, empowering businesses to focus on what they do best.</p>
            <p>At the heart of  <span className="text-red-400 font-semibold">CircuitFlow</span> is a team of passionate individuals dedicated to revolutionizing the way businesses handle their inventory. With a perfect blend of technology enthusiasts, business experts, and customer-focused professionals, we strive to provide a comprehensive solution tailored to your unique needs.</p>
          </div>
        </div>
      </div>
    );
};

export default About;