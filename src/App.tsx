import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';

import {
  CharacterPage,
  CharactersPage,
  EpisodesPage,
  Home,
  LocationsPage,
} from './pages';

export const App = () => {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />

        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </main>
  );
};
