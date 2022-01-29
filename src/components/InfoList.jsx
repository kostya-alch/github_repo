import React from 'react';
import Footer from './Footer';
import InfoUser from './InfoUser';
import RepoInfo from './RepoInfo';

const InfoList = ({ profile, reposList }) => {
   return (<div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap -mx-4 mb-20">
         <InfoUser profile={profile} />
         <RepoInfo reposList={reposList} />
      </div>
      <Footer />
   </div>)
};

export default InfoList;
