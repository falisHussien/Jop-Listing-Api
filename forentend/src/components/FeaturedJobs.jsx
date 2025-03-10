import React from 'react';
import image from "../assets/img.webp"
const FeaturedJobs = () => {
  // Static data for featured jobs
  const jobs = [
    {
      title: 'Software Developer',
      company: 'TechCorp',
      location: 'Remote',
      description: 'Develop and maintain web applications, optimize code for speed and scalability, and collaborate with cross-functional teams.',
     image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: 'Hardware Engineer',
      company: 'InnovaTech',
      location: 'San Francisco, CA',
      description: 'Design and implement hardware systems, collaborate with firmware developers, and troubleshoot hardware issues.',
      image: 'https://images.pexels.com/photos/9242894/pexels-photo-9242894.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Web Developer',
      company: 'WebWorks',
      location: 'Remote',
      description: 'Build and design websites, ensure cross-platform functionality, and work closely with designers and backend developers.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Data Analyst',
      company: 'DataSolutions',
      location: 'New York, NY',
      description: 'Analyze and interpret complex data, generate reports, and support decision-making processes with data insights.',
      image: 'https://media.istockphoto.com/id/2148562711/photo/two-businesspeople-or-an-accountant-team-are-analyzing-data-charts-graphs-and-a-dashboard-on.webp?s=1024x1024&w=is&k=20&c=exZuQZqO2taUh3T-Z-rcSTgObLuh_lSkAsGZbH_CSkA=',
    },
    {
      title: 'UI/UX Designer',
      company: 'CreativeHub',
      location: 'Los Angeles, CA',
      description: 'Design user interfaces, create user-centered designs, and improve user experiences for web and mobile applications.',
      image: 'https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=3840&q=75',
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudOps',
      location: 'Chicago, IL',
      description: 'Manage and optimize cloud infrastructure, automate deployment processes, and ensure application scalability.',
      image: 'https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.jpg?s=1024x1024&w=is&k=20&c=BKZ6ljThUJDpuzNMq9_I2Vn7px3jMrUqW03ILBQ41eQ=',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                {/* Display image if available */}
                <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-lg text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="mt-4 text-gray-700">{job.description.substring(0, 100)}...</p>
              <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
