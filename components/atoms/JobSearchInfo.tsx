import React from 'react';
import styled from 'styled-components';
import FontAwsome from 'components/atoms/FontAwsome';

const JobSearchInfo: React.FC = () => {
  return (
    <InfoBox>
      <FontAwsome iconName='fas fa-bell' fontSize='1.3rem' color='#55E05B' />
      {'구직중'}
    </InfoBox>
  );
};

const InfoBox = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1rem;
  font-weight: bold;

  width: 6.5em;

  color: white;
  background-color: #1f1f26;

  border-radius: 2em;
  border: none;

  padding: 0.7em 1em;
`;

export default JobSearchInfo;
