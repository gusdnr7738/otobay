import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route index element={<ListPage />} />
        <Route path="bikes/:bikeId" element={<DetailPage />} />
      </Routes>
    </AppLayout>
  );
}
