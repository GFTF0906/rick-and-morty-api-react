import { Subheading } from '../components/Headings/Subheading';
import { Title } from '../components/Headings/Title';
import { ExternalLinks } from '../components/Link/ExternalLinks';

export const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col py-10 sm:px-60 sm:py-20 md:px-40">
      <section className="flex items-center justify-center flex-col pb-20 sm:pb-10">
        <Title
          text="Rick and Morty I.N.F.O"
          className="text-center text-4xl font-bold p-8 sm:text-6xl"
        />
        <Subheading
          text={'Here you can see Rick and Morty information, blazingly fast!'}
          className="text-center"
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
