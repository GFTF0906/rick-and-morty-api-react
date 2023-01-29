import {
  ReactIcon,
  ReactQueryIcon,
  ReactRouterIcon,
  RickMortyAPIIcon,
  SimpleIconsIcon,
  TailwindIcon,
} from '../svgs';
import { ExternalLink } from './ExternalLink';

export const ExternalLinks = () => {
  return (
    <section className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 xl:flex xl:flex-row">
      <ExternalLink
        text="React"
        url="https://reactjs.org/"
        icon={<ReactIcon />}
      />

      <ExternalLink
        text="React Query"
        url="https://tanstack.com/query/latest"
        icon={<ReactQueryIcon />}
      />

      <ExternalLink
        text="React Router Dom"
        url="https://reactrouter.com/en/main"
        icon={<ReactRouterIcon />}
      />

      <ExternalLink
        text="Tailwind CSS"
        url="https://tailwindcss.com/"
        icon={<TailwindIcon />}
      />
      <ExternalLink
        text="Simple Icons"
        url="https://simpleicons.org"
        icon={<SimpleIconsIcon />}
      />

      <ExternalLink
        text="Rick and Morty API"
        url="https://rickandmortyapi.com/"
        icon={<RickMortyAPIIcon />}
      />
    </section>
  );
};
