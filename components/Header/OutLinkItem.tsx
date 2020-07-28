import React from 'react';
import { GetProps } from 'components/typings/GetProps';
import FontAwsome from '../common/FontAwsome';
import { styled } from 'components/typings/Theme';

interface OutLinkItemProps extends GetProps<typeof FontAwsome> {
  href: string;
}

const OutLinkItem: React.FC<OutLinkItemProps> = ({ iconName, size, href }) => {
  return (
    <StyledOutLinkItem href={href}>
      <FontAwsome iconName={iconName} size={size} />
    </StyledOutLinkItem>
  );
};

const StyledOutLinkItem = styled.a`
  display: inline-block;
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.blue};

  & + & {
    margin-left: 0.8rem;
  }
`;

export default OutLinkItem;
