import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<></>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
