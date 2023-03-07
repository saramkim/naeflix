import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Credits from '../movie/Credits';
import RecommendationMovies from '../movie/RecommendationMovies';
import MoviesWithStars from '../MoviesWithStars';
import Cast from '../person/Cast';
import Crew from '../person/Crew';
import TopRatedMovies from '../TopRatedMovies';
import Trending from '../Trending';

const CategoryLayout = styled.div`
  ${({ theme }) => theme.style.minHeight};
  padding: 50px;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

function Category() {
  const { category, id } = useParams();
  const Components = {
    'top-rated': <TopRatedMovies direction='vertical' />,
    'trending-day': <Trending period='day' direction='vertical' />,
    'trending-week': <Trending period='week' direction='vertical' />,
    recommendation: <RecommendationMovies id={id!} direction='vertical' />,
    credits: <Credits id={id!} direction='vertical' />,
    cast: <Cast id={id!} direction='vertical' />,
    crew: <Crew id={id!} direction='vertical' />,
  };

  return (
    <CategoryLayout>
      {Components[category!] || <MoviesWithStars direction='vertical' category={category!} />}
    </CategoryLayout>
  );
}

export default Category;
