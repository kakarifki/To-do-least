import Layout from '@/components/common/layout';
import React from 'react';

const About: React.FC = () => {
  return (
    <Layout>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About To-Do List Webapp</h1>
      <p className="mb-6">
        The To-Do List Webapp is a user-friendly tool designed to help users efficiently manage their daily tasks. It offers several key features to enhance task management and productivity. The application is built using React, TypeScript, and Tailwind CSS, ensuring a responsive and intuitive user experience.
      </p>
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc pl-8">
        <li className="mb-2">Task Creation: Users can add new tasks to their to-do list with ease.</li>
        <li className="mb-2">Task Editing: Modify existing tasks to keep your list up-to-date.</li>
        <li className="mb-2">Task Deletion: Remove completed or unwanted tasks.</li>
        <li className="mb-2">Task Completion Tracking: Mark tasks as complete using checkboxes for better progress tracking.</li>
        <li className="mb-2">Dynamic User Interface: Responsive design with an intuitive user experience.</li>
      </ul>
    </div>
    </Layout>
  );
};

export default About;
