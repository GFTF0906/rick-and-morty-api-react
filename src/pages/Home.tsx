import { Subheading } from '../components/Headings/Subheading';
import { Title } from '../components/Headings/Title';
import { ExternalLinks } from '../components/Link/ExternalLinks';

export const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col px-80 py-20">
      <section className="flex items-center justify-center flex-col pb-40">
        <Title
          text="Rick and Morty | I.N.F.O"
          className="text-6xl font-bold p-8"
        />
        <Subheading
          text={'Here you can see Rick and Morty information, blazingly fast!'}
        />
      </section>

      <Subheading
        text="This project was developed, using..."
        className="text-2xl pb-8 font-semibold"
      />
      <ExternalLinks />
    </section>
  );
};
