import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Shared } from './pages/SharedPage/index';
import { Folder } from './pages/FolderPage/index';
import './App.css';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
