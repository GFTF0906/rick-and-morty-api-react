import { Subheading } from '../components/Headings/Subheading';
import { Title } from '../components/Headings/Title';
import { ExternalLink } from '../components/Link/ExternalLink';
import {
  ReactIcon,
  ReactQueryIcon,
  ReactRouterIcon,
  RickMortyAPIIcon,
  SimpleIconsIcon,
  TailwindIcon,
} from '../components/svgs';

export const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col px-80">
      <section className="flex items-center justify-center flex-col pb-40">
        <Title
          text="Rick and Morty | I.N.F.O"
          className="text-6xl font-bold p-8"
        />
        <Subheading
          text={'Here you can see Rick and Morty information, blazingly fast!'}
        />
      </section>

      <p className="text-2xl pb-8 font-semibold">
        This project was developed, using...
      </p>

      <section className="flex gap-4">
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
    </section>
  );
};
