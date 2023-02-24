/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function TrendingListTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<LocalFireDepartmentIcon />} label="Trending" />
      <Tab icon={<BookmarksIcon />} label="Bookmarks" />
      <Tab icon={<FontDownloadIcon />} label="Fonts" />
    </Tabs>
  );
}
