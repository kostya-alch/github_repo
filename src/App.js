import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProfileUserAction, getReposAction } from './actions/actions';
import header from './img/header.jpg';
const App = () => {
  const [valueSearch, setValueSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReposAction(valueSearch));
    dispatch(getProfileUserAction(valueSearch));
  }, [dispatch, valueSearch]);

  const store = useSelector((state) => state?.repos);
  const { loading, reposList, error, profile } = store;

  return (
    <>
      <section className="relative 2xl bg-gray-800 min-h-screen">
        <div className="relative container px-4 mx-auto">
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
            </div>
          </div>
          {/* Content goes here */}

          {loading ? (
            <h1>Loading please wait...</h1>
          ) : error ? (
            <h2>{error?.data?.message}</h2>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap -mx-4 mb-20">
                <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                  <div className="bg-gray-600 rounded-b-lg">
                    <div className="flex justify-center">
                      {/* Avatar image */}
                      <img
                        className="w-56 h-56 rounded-full"
                        src={profile?.avatar_url}
                        alt="avatar"
                      />
                    </div>
                    <div className="px-14 py-8">
                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Name: <span>{profile?.name}</span>
                      </h4>
                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Bio goes here */}
                        Bio: <span>{profile?.bio}</span>
                      </h4>
                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Company goes here */}
                        Company: <span>{profile?.company}</span>
                      </h4>
                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* Location goes here */}
                        Location: <span>{profile?.location}</span>
                      </h4>

                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* followers goes here */}
                        Followers: <span>{profile?.followers}</span>
                      </h4>

                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        {/* following goes here */}
                        Following: <span>{profile?.following}</span>
                      </h4>

                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Repositories:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                          {profile?.public_repos
                            ? profile?.public_repos
                            : 'N/A'}
                        </span>
                      </h4>

                      <div className="mb-6 py-px bg-gray-500"></div>
                      <h4 className="mb-8 lg:mb-4  text-white font-bold">
                        Gists:{' '}
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                          {profile?.public_gists
                            ? profile?.public_gists
                            : 'N/A'}
                        </span>
                      </h4>
                      <div className="mb-6 py-px bg-gray-500"></div>
                      <div className="md:text-right">
                        <a
                          href={profile?.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-white"
                        >
                          Посмотреть профиль
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repository list */}
                <div className="w-full lg:w-1/2 px-4">
                  {/* Loop this */}
                  {reposList?.name !== 'Error' &&
                    reposList?.map((repo) => (
                      <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                        <div className="flex items-center">
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
              </div>
              <div className="text-center bg-gray-300 ">
                <p className="mb-4  text-gray-300">
                  Разработано
                  <span className="p-2 text-yellow-300">
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
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default App;
