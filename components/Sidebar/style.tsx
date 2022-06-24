import Collapse from 'rc-collapse';
import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding: 20px;
  transition: 300ms;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .sidebar-content {
    width: 100%;
  }
  .search-container {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const CollapseWrapper = styled<any>(Collapse)`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  .rc-collapse-item {
    border: none !important;
    padding: 12px;
    border-radius: 12px;
    &.rc-collapse-item-active {
      transition: 300ms;
    }
    .rc-collapse-header {
      padding: 0 !important;
      transition: 300ms;
    }
    .rc-collapse-content {
      transition: 300ms;
      background: transparent;
      padding: 0;
      .rc-collapse-content-box {
        margin: 0;
        ul {
          margin: 0;
          margin-top: 10px;
          padding: 0;
          list-style: none;
          max-height: calc(100vh - 430px);
          overflow-y: auto;
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #3e3e3e;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .rc-collapse-header {
            .custom-arrow {
              tranform: rotate(90deg);
            }
          }
          li {
            padding: 3px 0;
            padding-left: 22px;
            font-size: 14px;
            a {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
  }
`;
