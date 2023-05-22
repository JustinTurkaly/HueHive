import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppContext } from '../AppContext';

const options = [
  'Add to Light shade',
  'Add to Light accent',
  'Add to Main brand',
  'Add to Dark accent',
  'Add to Dark shade',
];

type Props = {
  color: string[];
};

const ITEM_HEIGHT = 48;

const MaterialPlusMenu: React.FC<Props> = ({ color }) => {
  const { global, setGlobalState } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (option: string) => {
    const shadeStateObj = {
      'Add to Light shade': 'lShades',
      'Add to Light accent': 'lAccent',
      'Add to Main brand': 'mainColor',
      'Add to Dark shade': 'dShades',
      'Add to Dark accent': 'dAccent',
    };

    console.log('insindecolorselect ' + option);
    setGlobalState({
      ...global,
      customPalette: {
        ...global.customPalette,
        [shadeStateObj[option]]: [color[1], color[0]],
      },
    });
  };

  return (
    <div style={{ marginTop: '-90px' }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleColorSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MaterialPlusMenu;
