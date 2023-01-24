import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';

import { Home } from './pages/Home';

import { CharactersPage } from './pages/CharactersPage';
import { CharacterPage } from './pages/CharacterPage';

import { LocationsPage } from './pages/LocationsPage';
import { EpisodesPage } from './pages/EpisodesPage';

export const App = () => {
  return (
    <main className="flex flex-col gap-8">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters/" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />

        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </main>
  );
};
