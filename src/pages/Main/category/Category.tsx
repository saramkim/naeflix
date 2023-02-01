import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import MoviesWithStars from '../MoviesWithStars';
import TopRatedMovies from '../TopRatedMovies';

const CategoryLayout = styled.div`
  padding: 50px;
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER_FOOTER};

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

function Category() {
  const { category } = useParams();

  if (category === 'top-rated')
    return (
      <CategoryLayout>
        <TopRatedMovies direction='vertical' />
      </CategoryLayout>
    );

  return (
    <CategoryLayout>
      <MoviesWithStars direction='vertical' category={category!} />
    </CategoryLayout>
  );
}

export default Category;
