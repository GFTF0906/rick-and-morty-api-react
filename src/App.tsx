import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';

import {
  CharacterPage,
  CharactersPage,
  EpisodePage,
  EpisodesPage,
  Home,
  LocationPage,
  LocationsPage,
} from './pages';

export const App = () => {
  return (
    <main className="flex flex-col gap-10">
      <Header />

      <section className="flex items-center justify-center flex-col pb-4">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/characters">
              <Route index element={<CharactersPage />} />
              <Route path=":id" element={<CharacterPage />} />
            </Route>
            <Route path="/locations">
              <Route index element={<LocationsPage />} />
              <Route path=":id" element={<LocationPage />} />
            </Route>
            <Route path="/episodes">
              <Route index element={<EpisodesPage />} />
              <Route path=":id" element={<EpisodePage />} />
            </Route>
          </Route>
        </Routes>
      </section>
    </main>
  );
};
