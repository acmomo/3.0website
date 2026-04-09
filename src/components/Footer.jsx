import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Expanded Cinema & Science Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;