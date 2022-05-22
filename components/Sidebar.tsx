import styled from 'styled-components';
import Link from 'next/link';
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');
import motion from '../utils/motionUtil';
import { sidebarMenuItems } from '../assets/db/sidebarMenuItems';

const SidebarWrapper = styled.div`
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
`;

const CollapseWrapper = styled<any>(Collapse)`
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

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
  '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
  '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
  '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

const expandIcon = ({ isActive }: any) => {
  return (
    <i style={{ marginRight: '.5rem' }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: `rotate(${isActive ? 90 : 0}deg)`,
        }}
      >
        <path d={arrowPath} p-id="5827" />
      </svg>
    </i>
  );
};

const Sidebar = ({ theme }: any) => {
  return (
    <SidebarWrapper theme={theme} className="sidebar">
      <div className="title">
        <Link href="/">
          <a>Js Helper</a>
        </Link>
      </div>
      <div className="sidebar-content">
        <CollapseWrapper
          theme={theme}
          accordion={true}
          openMotion={motion || null}
          defaultActiveKey={1}
          expandIcon={expandIcon}
        >
          {sidebarMenuItems.map((item: any, idx: number) => (
            <Panel
              header={<>{item.title}</>}
              headerClass="my-header-class"
              key={idx + 1}
            >
              <ul>
                {item.subItem.map((subItem: any, subIdx: number) => (
                  <li key={subIdx}>
                    <Link href={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </CollapseWrapper>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
