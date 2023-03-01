import { getPersonCredits } from 'api/personData';
import HorizontalContainer from 'components/HorizontalContainer';
import Loading from 'components/Loading';
import VerticalContainer from 'components/VerticalContainer';
import { useData } from 'hooks/useData';

import Movie from '../Movie';

function Cast({ id, direction }: { id: string; direction: 'vertical' | 'horizontal' }) {
  const [credits] = useData({
    callback: getPersonCredits,
    initailValue: null,
    id,
  });

  if (credits) {
    const { cast } = credits;

    if (direction === 'vertical')
      return (
        <VerticalContainer category='cast'>
          {cast.map((data) => (
            <Movie {...data} key={data.id} />
          ))}
        </VerticalContainer>
      );

    return (
      <HorizontalContainer category='cast'>
        {cast.map((data) => (
          <Movie {...data} key={data.id} />
        ))}
      </HorizontalContainer>
    );
  }

  return <Loading />;
}

export default Cast;
