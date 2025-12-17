import React from "react";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        
        {/* Text Area */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Grow Your <span className="text-blue-600">Business</span><br />
            With Modern Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We help businesses grow faster with world-class digital products,
            stunning designs, and highly scalable solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>

            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            // src="https://cdni.iconscout.com/illustration/premium/thumb/business-growth-illustration-download-in-svg-png-gif-file-formats--startup-freelance-team-pack-business-illustrations-3057027.png"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UojjwbfE4sx5fYFjrZjNHbj0tNEQ4niOow&s"
            alt="Hero"
            className="w-[90%] drop-shadow-xl"
          />
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-500 mt-3">
            We provide high-quality digital services for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {/* Card 1 */}
            <div className="p-8 bg-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
              <Star size={40} className="text-blue-600 mx-auto" />
              <h3 className="text-2xl font-semibold mt-5">Web Development</h3>
              <p className="text-gray-500 mt-3">
                Beautiful, fast, and responsive web applications using modern technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
              <CheckCircle size={40} className="text-blue-600 mx-auto" />
              <h3 className="text-2xl font-semibold mt-5">App Development</h3>
              <p className="text-gray-500 mt-3">
                High-quality Android and iOS apps tailored to your needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
              <Star size={40} className="text-blue-600 mx-auto" />
              <h3 className="text-2xl font-semibold mt-5">UI / UX Design</h3>
              <p className="text-gray-500 mt-3">
                Stunning and user-friendly designs for better digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            // src="https://cdni.iconscout.com/illustration/premium/thumb/data-analytics-illustration-download-in-svg-png-gif-file-formats--analysis-analytics-website-pack-business-illustrations-4044110.png"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvN1t-ehC9ucJdBb5aEJeEu-wgNMMJz9ofPg&s"
            className="w-[80%] mx-auto drop-shadow-lg"
          />

          {/* Features */}
          <div>
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              We deliver premium services and create innovative solutions that help your business stand out.
            </p>

            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> 100% Quality Assurance
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> Fast Delivery
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> Smart & Scalable Solutions
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" /> Professional Team Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-4 text-lg">
          Contact us today and get your project started with our expert team.
        </p>

        <button className="mt-8 px-8 py-3 text-lg bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;