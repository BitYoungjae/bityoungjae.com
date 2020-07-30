import React from 'react';
import FontAwsome from '../common/FontAwsome';
import { GetProps } from 'components/typings/GetProps';
import { styled } from 'components/typings/Theme';

interface OutLinkItemProps
  extends Pick<GetProps<typeof FontAwsome>, 'iconName'> {
  href: string;
}

const OutLinkItem: React.FC<OutLinkItemProps> = ({ iconName, href }) => {
  return (
    <StyledOutLinkItem href={href}>
      <FontAwsome iconName={iconName} size='big' color='iconOnBackground' />
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

export default OutLinkItem;
