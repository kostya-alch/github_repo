import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileUserAction, getReposAction } from '../actions/actions';
import header from '../img/header.jpg';


const Navbar = () => {
   const dispatch = useDispatch();
   const [valueSearch, setValueSearch] = useState('');
   const getSearch = () => {
      dispatch(getReposAction(valueSearch));
      dispatch(getProfileUserAction(valueSearch));
   };
   return (
      <div className="text-center mb-20">
         {/* <span className="text-lg text-blue-400 font-bold">
     Have a question?
   </span> */}
         <div className="flex justify-center">
            <img
               className="h-64 pt-1  rounded-lg object-cover"
               src={header}
               alt=""
            />
         </div>

         <h2 className="mt-10 mb-5 text-5xl font-bold font-heading text-indigo-300">
            Поиск по GitHub
         </h2>
         <div className="mt-1 flex justify-center">
            {/* input */}
            <input
               value={valueSearch}
               onChange={(event) => setValueSearch(event.target.value)}
               type="text"
               name="email"
               id="email"
               className="shadow-sm text-center focus:ring-indigo-500 p-2 focus:border-indigo-500  sm:text-sm border-gray-300 w-full rounded-md lg:w-1/2"
               placeholder="Введите ник пользователя"
            />
            <button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3"
               onClick={() => getSearch()}
            >
               Найти
            </button>
         </div>
      </div>
   );
};

export default Navbar;
