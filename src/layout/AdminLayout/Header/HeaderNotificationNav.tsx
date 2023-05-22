/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { AppContext } from '../../../../components/AppContext';

export default function HeaderNotificationNav() {
  const { global } = useContext(AppContext);
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lAccent[0] }
                : { color: global.gptPallete[1][0] }
            }
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon
            icon={faList}
            size="lg"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lAccent[0] }
                : { color: global.gptPallete[1][0] }
            }
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="p-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            style={
              global.customPaletteBool
                ? { color: global.customPalette.lAccent[0] }
                : { color: global.gptPallete[1][0] }
            }
          />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
