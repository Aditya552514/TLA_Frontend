import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ----------- HERO SECTION ----------- */}
      <section className="w-full bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
            Have questions? We’re here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* ----------- CONTACT DETAILS ----------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition text-center">
          <Mail size={40} className="text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p className="text-gray-600 mt-2">support@example.com</p>
          <p className="text-gray-600">info@example.com</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition text-center">
          <Phone size={40} className="text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Phone</h3>
          <p className="text-gray-600 mt-2">+91 9876543210</p>
          <p className="text-gray-600">+91 9123456780</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition text-center">
          <MapPin size={40} className="text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Address</h3>
          <p className="text-gray-600 mt-2">Hyderabad, Telangana</p>
          <p className="text-gray-600">India</p>
        </div>

      </section>

      {/* ----------- CONTACT FORM ----------- */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">Send Us a Message</h2>
        <p className="mt-2 text-center text-gray-600 max-w-xl mx-auto">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="mt-12 bg-white p-10 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-600"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 font-medium hover:bg-blue-700 transition">
              Send Message <Send size={20} />
            </button>
          </div>

        </form>
      </section>

     

      <section className="w-full">
  <h2 className="text-3xl font-bold text-center mb-2">Find Us</h2>
  <p className="text-center text-gray-600 mb-6">Our office location</p>

  <div className="w-full h-[350px] max-w-7xl mx-auto px-6 mb-20">
    <iframe
      title="Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.894922541838!2d79.97771507414642!3d14.433218681154683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3999bf8baa9%3A0x130f3388e7d7fccd!2sTerralogic%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765219249495!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="rounded-2xl shadow-lg border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.894922541838!2d79.97771507414642!3d14.433218681154683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3999bf8baa9%3A0x130f3388e7d7fccd!2sTerralogic%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765219249495!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
</section>


    </div>
  );
};

export default ContactPage;