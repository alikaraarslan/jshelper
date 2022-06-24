import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  .btn-navigation {
    .navigation-text {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      border-radius: 8px;
      height: 60px;
      padding: 15px;
      transition: 300ms;
      span {
        font-size: 12px;
        opacity: 0.7;
        margin-bottom: 4px;
      }
    }
  }
`;

export default FooterWrapper;
