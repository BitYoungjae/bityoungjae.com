import React, { useContext } from 'react';
import FontAwsome from '../common/FontAwsome';
import { GetProps } from 'components/typings/GetProps';
import { styled } from 'components/styles/themes/types';
import { FilledContext } from '.';

interface OutLinkItemProps
  extends Pick<GetProps<typeof FontAwsome>, 'iconName'> {
  href: string;
}

const OutLinkItem: React.FC<OutLinkItemProps> = ({ iconName, href }) => {
  const isFilled = useContext(FilledContext);

  return (
    <StyledOutLinkItem href={href}>
      <FontAwsome
        iconName={iconName}
        size='big'
        color={isFilled ? 'iconOnFilledHeader' : 'iconOnBackground'}
      />
    </StyledOutLinkItem>
  );
};

const StyledOutLinkItem = styled.a`
  display: inline-block;
  padding: 1rem 0;

  & + & {
    margin-left: 0.8rem;
  }
`;

export default React.memo(OutLinkItem);
