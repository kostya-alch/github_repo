import React from 'react';

const Footer = () => {
   return (
      <div className="text-center w-full bg-gray-700 ">
         <p className="mb-4  text-green-50 text-lg mt-1">
            Разработано
            <span className="p-2 text-yellow-300 text-lg">
               <a href="https://github.com/kostya-alch">
                  Константин Романов
               </a>
            </span>
         </p>
         <a
            className="inline-flex text-blue-400 hover:text-blue-500 font-bold"
            href="https://github.com/kostya-alch"
         >
            <span className="mb-10">Посмотреть другие проекты</span>
            <svg
               className="ml-4 w-4 h-5"
               width="19"
               height="20"
               viewBox="0 0 19 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
                  fill="#1F40FF"
               ></path>
            </svg>
         </a>
      </div>
   );
};

export default Footer;
