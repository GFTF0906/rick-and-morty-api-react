import { Characters } from './components/Characters/';
import { Header } from './components/Header';

import { useFetchAll } from './hooks/useFetchAll';

export const App = () => {
  const { data, isLoading, isError } = useFetchAll();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error on fetching data.</h2>;

  return (
    <main className="w-full flex justify-center items-center flex-col gap-12">
      <Header />
      {data && <Characters results={data?.results} />}
    </main>
  );
};
