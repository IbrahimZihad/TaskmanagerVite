import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <div className="relative top-[800px] flex justify-between items-center w-full h-[500px] bg-gray-600 px-4 text-white">
      
      {/* Footer Left Section */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <p className="font-cursive text-5xl mb-4">Task Manager</p>
        <p className="font-cursive text-base leading-relaxed">
          Task Manager is a project management and issue tracking website that helps teams plan, track, and manage work.
          Task Manager Limited is a leading home service company in Bangladesh working to democratize digital lifestyle across the country.
        </p>
      </div>

      {/* Footer Middle Navigation */}
      <div className="flex-1 flex flex-col items-center space-y-4">
        <Link to="/" className="hover:text-gray-200 hover:font-bold hover:text-xl transition">Home</Link>
        <Link to="/project_guide" className="hover:text-gray-200 hover:font-bold hover:text-xl transition">Product Guide</Link>
        <Link to="/about" className="hover:text-gray-200 hover:font-bold hover:text-xl transition">About</Link>
      </div>

      {/* Footer Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-1 text-base font-semibold">
        <p>House #08, Road #10, Stadium Road,</p>
        <p>Mirpur, Dhaka, Bangladesh</p>
        <p>+88 01328911249</p>
        <p>task_manager1@gmail.com</p>
      </div>
    </div>
  );
};

export default PublicFooter;
