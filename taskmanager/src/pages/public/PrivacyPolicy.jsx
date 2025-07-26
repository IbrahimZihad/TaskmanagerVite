import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Privacy Policy</h2>
      <p className="mb-4">
        At Task Manager, we take your privacy seriously. This Privacy Policy explains what information we collect and how we use it.
      </p>
      <h3 className="text-xl font-semibold mt-6">Information We Collect</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Personal information like name, email, and password during sign up.</li>
        <li>Project and task-related data you create within the application.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">How We Use Your Information</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide access to your dashboard and personalized content.</li>
        <li>To improve our services and user experience.</li>
        <li>To ensure the security of your account and data.</li>
      </ul>

      <p className="mt-6">
        We do not sell your information to third parties. For any privacy-related concerns, contact <a href="mailto:privacy@taskmanager.com" className="text-indigo-500 underline">privacy@taskmanager.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
