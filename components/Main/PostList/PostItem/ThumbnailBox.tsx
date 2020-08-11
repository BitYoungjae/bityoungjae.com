import { styled } from 'components/styles/themes/types';

const ThumbnailBox = styled.img`
  width: 50%;
  height: 20rem;
  object-fit: cover;

  flex-shrink: 0;

  margin: -1rem;
  margin-right: 1.5rem;

  @media screen and (max-width: 1224px) {
    width: calc(100% + 2rem);
    margin: -1rem;
    margin-bottom: 0;
  }
`;

export default ThumbnailBox;
