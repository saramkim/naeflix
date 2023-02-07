import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import Credits from '../movie/Credits';
import RecommendationMovies from '../movie/RecommendationMovies';
import MoviesWithStars from '../MoviesWithStars';
import Cast from '../person/Cast';
import Crew from '../person/Crew';
import TopRatedMovies from '../TopRatedMovies';

const CategoryLayout = styled.div`
  padding: 50px;
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER_FOOTER};

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

function Category() {
  const { category, id } = useParams();

  const components = {
    'top-rated': <TopRatedMovies direction='vertical' />,
    recommendation: <RecommendationMovies id={id!} direction='vertical' />,
    credits: <Credits id={id!} direction='vertical' />,
    cast: <Cast id={id!} direction='vertical' />,
    crew: <Crew id={id!} direction='vertical' />,
  };

  if (category! in components) return <CategoryLayout>{components[category!]}</CategoryLayout>;

  return (
    <CategoryLayout>
      <MoviesWithStars direction='vertical' category={category!} />
    </CategoryLayout>
  );
}

export default Category;
