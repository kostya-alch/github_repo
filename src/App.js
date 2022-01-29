import Layout from './components/Layout';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <MainContent />
      </Layout>
    </>
  );
};

export default App;
