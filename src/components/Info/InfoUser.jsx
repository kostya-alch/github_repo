import React from 'react';
import whiteBg from '../../assets/img/white.jpg'

const InfoUser = ({ profile }) => {
    return (
        <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0 rounded-lg">
            <div className="bg-gray-600 rounded-b-lg">
                <div className="flex justify-center">
                    {/* Avatar image */}
                    <img
                        className="w-56 h-56 rounded-full mt-1"
                        src={profile?.avatar_url ? profile?.avatar_url : whiteBg}
                        alt='avatar'
                    />
                </div>
                <div className="px-14 py-8">
                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Name:{' '}
                        <span className='ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800"'>
                            {profile?.name ? profile?.name : 'N/A'}
                        </span>
                    </h4>
                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Bio goes here */}
                        Bio:{' '}
                        <span className='"ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800"'>
                            {profile?.bio ? profile?.bio : 'N/A'}
                        </span>
                    </h4>
                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Company goes here */}
                        Company:{' '}
                        <span className="ml-2 inline-flex text-white items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.company ? profile?.company : 'N/A'}
                        </span>
                    </h4>
                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Location goes here */}
                        Location:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.location ? profile?.location : 'N/A'}
                        </span>
                    </h4>

                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* followers goes here */}
                        Followers:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.followers ? profile?.followers : 'N/A'}
                        </span>
                    </h4>

                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* following goes here */}
                        Following:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.following ? profile?.following : 'N/A'}
                        </span>
                    </h4>

                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Repositories:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.public_repos ? profile?.public_repos : 'N/A'}
                        </span>
                    </h4>

                    <div className="mb-6 py-px bg-gray-500"></div>
                    <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Gists:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                            {profile?.public_gists ? profile?.public_gists : 'N/A'}
                        </span>
                    </h4>
                    <div className="mb-6 py-px bg-gray-500"></div>
                    <div className="md:text-right">
                        <a
                            href={profile?.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-4 border border-gray-300 hover:bg-gray-900 rounded-full font-bold text-white"
                        >
                            Посмотреть профиль
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoUser;
