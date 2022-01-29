import React from 'react';

const Layout = ({ children }) => {
   return (
      <section className="relative 2xl bg-gray-800 min-h-screen">
         <div className="relative container px-4 mx-auto">
            {children}
         </div>
      </section>
   );
};

export default Layout;
