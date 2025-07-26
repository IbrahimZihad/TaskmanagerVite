import React from 'react';

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Help & Support</h2>
      <p className="mb-4">
        If you need assistance using Task Manager, here are some helpful tips:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>To create a new account, click on the <strong>Sign Up</strong> button on the landing page.</li>
        <li>Use the <strong>Login</strong> button to access your dashboard once registered.</li>
        <li>After logging in, you can create tasks, assign team members, and track progress using the Scrum Board.</li>
        <li>If you're an admin, you can view project-wide analytics from the admin dashboard.</li>
      </ul>
      <p className="mt-6">
        For further help, please contact us at <a href="mailto:support@taskmanager.com" className="text-blue-500 underline">support@taskmanager.com</a>
      </p>
    </div>
  );
};

export default Help;
