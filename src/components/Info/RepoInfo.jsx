import React from 'react';

const RepoInfo = ({ reposList }) => {
   return (
      <div className="w-full lg:w-1/2 px-4">
         {/* Loop this */}
         {reposList?.name !== 'Error' &&
            reposList?.map((repo, index) => (
               <div key={index} className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                  <div className="flex items-center justify-center">
                     <a
                        href={repo?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg  text-indigo-400"
                     >
                        {repo?.name}
                     </a>
                  </div>
               </div>
            ))}
         <div className="py-6 px-8"></div>
      </div>
   );
};

export default RepoInfo;
