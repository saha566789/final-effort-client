


const Faq = () => {
    return (
        <div className="mt-10">
            <h2 className="lg:text-4xl text-2xl text-center text-red-800 font-bold">Frequently Asked Questions(FAQ)</h2>

          <div className="lg:m-20  m-2 ">
          <div className="collapse collapse-plus mb-4 bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xs lg:text-xl font-bold lg:font-medium">
  How can I get started with CircuitFlow?
  </div>
  <div className="collapse-content"> 
    <p className="lg:text-xl text-xs">Getting started is easy! Simply [sign up on our website], and you will be guided through the setup process. If you have specific questions or need assistance, our support team is here to help.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-4 bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xs lg:text-xl font-bold lg:font-medium">
  Can I try CircuitFlow before committing to a subscription?
  </div>
  <div className="collapse-content"> 
    <p  className="lg:text-xl text-xs">Certainly! We offer a [free trial period] so you can experience the benefits of CircuitFlow firsthand. Take the opportunity to explore our features and see how our inventory management tools can benefit your business.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-sm lg:text-xl font-bold lg:font-medium">
  How often does CircuitFlow update its features?
  </div>
  <div className="collapse-content"> 
    <p  className="lg:text-xl text-xs">We strive to provide the best tools for our users, and that includes regularly updating and adding new features. You can expect regular updates to enhance your experience and ensure that [Your Company Name] remains a valuable asset for your business.</p>
  </div>
</div>     </div>



</div>
            
    );
};

export default Faq;