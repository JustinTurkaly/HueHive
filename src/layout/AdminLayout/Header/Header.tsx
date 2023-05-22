/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import HeaderFeaturedNav from '@layout/AdminLayout/Header/HeaderFeaturedNav';
import HeaderNotificationNav from '@layout/AdminLayout/Header/HeaderNotificationNav';
import HeaderProfileNav from '@layout/AdminLayout/Header/HeaderProfileNav';
import { Button, Container } from 'react-bootstrap';
import { AppContext } from '../../../../components/AppContext';

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
};

export default function Header(props: HeaderProps) {
  const { toggleSidebar, toggleSidebarMd } = props;
  const { global } = useContext(AppContext);

  return (
    <header
      className="header sticky-top p-2 border-bottom border border-secondary"
      style={
        global.customPaletteBool
          ? { backgroundColor: global.customPalette.mainColor[0] }
          : { backgroundColor: global.gptPallete[2][0] }
      }
    >
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lAccent[0] }
                : { color: global.gptPallete[1][0] }
            }
          />
        </Button>
        <Link href="/" className="header-brand d-md-none">
          <h1>Your Logo</h1>
        </Link>
        <div className="header-nav d-none d-md-flex">
          <HeaderFeaturedNav />
        </div>
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
    </header>
  );
}
