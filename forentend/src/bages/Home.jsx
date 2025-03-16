import React from 'react';
import Footer from '../components/Footer'
import FeaturedJobs from '../components/FeaturedJobs'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage: 'url(https://media.istockphoto.com/id/537503733/photo/businessman-search-for-dream-job.jpg?s=612x612&w=0&k=20&c=RxaI6YNAOQKyJTnaP_xX9HN6dfFbPwIb68MAKUjehAg=)' }}>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="z-10  text-center px-6 md:px-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Find Your Dream Job</h1>
    <p className="text-lg md:text-xl mb-6 text-white">Browse thousands of opportunities.</p>
    <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg transition-colors">Start Your Search</button>
  </div>
</section>


      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-100 animate__slideInLeft">
  <div className="container mx-auto text-center">
    <FeaturedJobs />
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-white nimate__animated animate__slideInLeft">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Search</h3>
        <p className="text-lg text-gray-500">Find jobs that match your skills and interests easily.</p>
      </div>
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Profiles</h3>
        <p className="text-lg text-gray-500">Learn more about companies and what they offer.</p>
      </div>
      <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Alerts</h3>
        <p className="text-lg text-gray-500">Get notified about the latest job openings that match your profile.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200nimate__animated animate__slideInLeft">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 hover:shadow-2xl transition-shadow">
              <p className="text-lg text-gray-500">"This platform helped me find my dream job! The process was smooth and easy to navigate."</p>
              <div className="flex pl-20">
                <img src="https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-12 h-12 rounded-full" alt="" />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h4>
              </div>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 hover:shadow-2xl transition-shadow">
              <p className="text-lg text-gray-500">"I love how easy it is to apply for jobs. I found the perfect opportunity in just a few days."</p>
              <div className="flex pl-20">
                <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=" className="w-12 h-12 rounded-full" alt="" />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h4>
              </div>
              <p className="text-gray-400">Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
export default Home