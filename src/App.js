import { useSelector } from 'react-redux';

import InfoList from './components/InfoList';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

const App = () => {
  const store = useSelector((state) => state?.repos);
  const { loading, reposList, error, profile } = store;

  return (
    <>
      <Layout>
        <Navbar />
        {loading ? (
          <h1>Loading please wait...</h1>
        ) : error ? (
          <h2>{error?.data?.message}</h2>
        ) : (
          <InfoList profile={profile} reposList={reposList} />
        )}
      </Layout>
    </>
  );
};

export default App;
