import React from 'react';
import styled from 'styled-components';
import ThemeWrapper from './style';
type Props = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const Theme = ({ toggleTheme, isDarkTheme }: Props) => {
  return (
    <ThemeWrapper>
      <span style={{ marginRight: '5px' }}>{isDarkTheme ? '🌜' : '🌞'}</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => {
            toggleTheme();
          }}
        />
        <span className="slider round" />
      </label>
    </ThemeWrapper>
  );
};

export default Theme;
