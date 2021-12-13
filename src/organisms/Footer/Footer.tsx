import React, { FC } from 'react';
import { Link } from 'gatsby';

import { FOOTER_URL, FOOTER_TEXT } from 'utils/constants';

import { Wrapper } from './styles';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Link to={FOOTER_URL}>
        <p className="footer__link">{FOOTER_TEXT}</p>
      </Link>
    </Wrapper>
  );
};

export default Footer;
