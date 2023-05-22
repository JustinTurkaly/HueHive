/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import React, { useContext } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { AppContext } from '../../../../components/AppContext';

export default function HeaderFeaturedNav() {
  const { global } = useContext(AppContext);
  return (
    <Nav>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link
            className="p-2"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lShades[0] }
                : { color: global.gptPallete[0][0] }
            }
          >
            Dashboard
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link
            className="p-2"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lShades[0] }
                : { color: global.gptPallete[0][0] }
            }
          >
            Users
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link
            className="p-2"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lShades[0] }
                : { color: global.gptPallete[0][0] }
            }
          >
            Settings
          </Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
