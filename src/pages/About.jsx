import React from "react";
import { Users, Award, Target, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ----------- HERO SECTION ----------- */}
      <section className="w-full bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
            Learn more about who we are, what we do, and why thousands trust us.
          </p>
        </div>
      </section>

      {/* ----------- OUR STORY ----------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
        //   src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-illustration-download-in-svg-png-gif-file-formats--teamwork-company-character-set-pack-business-illustrations-2719354.png"
          src="https://thumbs.dreamstime.com/b/our-story-symbol-yellow-sticky-note-words-beautiful-deep-blue-background-business-concept-copy-space-409783437.jpg"
          className="w-[80%] mx-auto drop-shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We started with one simple mission — to deliver high-quality,
            innovative digital solutions that help businesses grow.
            <br /><br />
            Today, we are a trusted global team providing web development,
            mobile apps, branding, UI/UX design and business solutions.
          </p>
        </div>
      </section>

      {/* ----------- STATS ----------- */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-6">
          <div className="bg-gray-100 p-10 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">8+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">120+</h3>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-blue-600">350+</h3>
            <p className="mt-2 text-gray-600">Projects Delivered</p>
          </div>
        </div>
      </section>

      {/* ----------- MISSION + VISION ----------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="bg-gray-100 p-10 rounded-2xl hover:shadow-lg transition">
          <Target className="text-blue-600" size={38} />
          <h3 className="text-3xl font-semibold mt-6">Our Mission</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            To empower businesses with cutting-edge digital solutions that
            inspire growth, streamline operations, and boost their global impact.
          </p>
        </div>

        <div className="bg-gray-100 p-10 rounded-2xl hover:shadow-lg transition">
          <Award className="text-blue-600" size={38} />
          <h3 className="text-3xl font-semibold mt-6">Our Vision</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            To become the world’s most trusted and creative digital agency,
            delivering excellence through innovation and passion.
          </p>
        </div>
      </section>

      {/* ----------- WHY CHOOSE US ----------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
          <p className="text-center text-gray-500 mt-3">
            Here are the reasons thousands trust us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <CheckCircle className="text-blue-600" size={35} />
              <h3 className="text-xl font-semibold mt-4">Expert Team</h3>
              <p className="text-gray-600 mt-2">
                Skilled professionals delivering excellent solutions.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <CheckCircle className="text-blue-600" size={35} />
              <h3 className="text-xl font-semibold mt-4">Modern Technologies</h3>
              <p className="text-gray-600 mt-2">
                We use the latest tools and tech to build world-class products.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <CheckCircle className="text-blue-600" size={35} />
              <h3 className="text-xl font-semibold mt-4">Premium Support</h3>
              <p className="text-gray-600 mt-2">
                Our support team ensures smooth and quick communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- TEAM SECTION ----------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Our talented team works passionately to bring ideas to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-32 h-32 rounded-full mx-auto shadow"
              />
              <h3 className="text-xl font-semibold mt-5">David Johnson</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                className="w-32 h-32 rounded-full mx-auto shadow"
              />
              <h3 className="text-xl font-semibold mt-5">Emily Carter</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                className="w-32 h-32 rounded-full mx-auto shadow"
              />
              <h3 className="text-xl font-semibold mt-5">Michael Smith</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;