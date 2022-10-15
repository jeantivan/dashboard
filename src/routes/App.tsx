import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
