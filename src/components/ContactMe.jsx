import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contactme" className="w-full bg-gray-200 py-16">
      <div className="container mx-auto px-4">

        {/* Contact Heading */}
        <h1 className="text-5xl font-bold text-orange-600 pt-8 text-center">Contact me</h1>

        {/* Sub-heading */}
        <h3 className="text-3xl text-gray-600 capitalize text-center mt-4">
          Questions, thoughts, or just want to say hello?
        </h3>

        <div className="contactus-form-container mt-8 flex items-center justify-center">
          {/* Form Section */}
          <form className="form flex flex-col gap-8 w-5/6 md:w-3/4 lg:w-2/3 mx-8" onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="formfield-container w-full">
              <input
                className="formfield w-full h-10 px-8 text-lg rounded-md shadow-md font-medium mt-7 focus:outline-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="formfield-container w-full">
              <input
                className="formfield w-full h-10 px-8 text-lg rounded-md shadow-md font-medium mt-7 focus:outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="formfield-container w-full">
              <input
                className="formfield w-full h-10 px-8 text-lg rounded-md shadow-md font-medium mt-7 focus:outline-none"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
              />
            </div>

            <div className="formfield-container w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="6"
                className="formfield w-full h-auto px-8 text-lg rounded-md shadow-md font-medium mt-7 focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                id="submit-btn"
                className="bg-pink-600 text-white py-2 px-8 rounded-md hover:bg-pink-700 transition-transform duration-300 transform hover:scale-90 flex items-center justify-center mx-auto"
              >
                Send Message
                <i className="submit-icon fa-solid fa-paper-plane ml-3 text-xl"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
