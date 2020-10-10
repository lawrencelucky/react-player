import React from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledWbnPlayer from './../styles/StyledWbnPlayer';

const theme = {
  bgcolor: '#353535',
  bgcoloritem: '#414141',
  bgcoloritemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
};

const themeLight = {
  bgcolor: '#fff',
  bgcoloritem: '#fff',
  bgcoloritemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: 'none',
  borderPlayed: 'none',
  color: '#353535',
};

const WbnPlayer = props => {
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      <StyledWbnPlayer>
        <Video />
        <Playlist />
      </StyledWbnPlayer>
    </ThemeProvider>
  );
};

export default WbnPlayer;
