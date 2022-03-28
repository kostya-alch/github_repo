import Layout from './components/Layout/Layout';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Layout/Navbar/Navbar';

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
