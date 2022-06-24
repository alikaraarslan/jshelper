import styled from 'styled-components';

const ThemeWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
  input {
    &:checked {
      + {
        .slider {
          &:before {
            -webkit-transform: translateX(20px);
            -ms-transform: translateX(20px);
            transform: translateX(20px);
          }
        }
      }
    }
  }
  .slider.round {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
`;

export default ThemeWrapper;
