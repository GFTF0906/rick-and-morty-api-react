import { TEpisode } from '../../types/EpisodeType';
import { Title } from '../Headings/Title';
import { Episode } from './Episode';

type EpisodesProps = {
  results: TEpisode[];
};

export const Episodes = ({ results: episodes }: EpisodesProps) => {
  if (!episodes) return <></>;

  return (
    <>
      <Title
        text="All Episodes"
        className="text-2xl font-bold pb-2 self-center"
      />

      <section className="flex flex-col px-8 gap-4 text-gray-900 sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:px-80">
        {episodes.map((episode) => (
          <Episode key={episode?.id} {...episode} />
        ))}
      </section>
    </>
  );
};
