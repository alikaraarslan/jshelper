import styled from 'styled-components';
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');
import motion from '../utils/motionUtil';

const SidebarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  height: calc(100vh - 60px);
  background: #050505;
  padding: 20px;
  color: white;
  border-radius: 12px;
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
      background: #3e3e3e;
      .rc-collapse-header {
        .custom-arrow {
          tranform: rotate(90deg);
        }
      }
    }
    .rc-collapse-header {
      padding: 0 !important;
      color: white;
    }
    .rc-collapse-content {
      background: transparent;
      color: white;
      padding: 0;
      .rc-collapse-content-box {
        margin: 0;
        ul {
          margin: 0;
          margin-top: 10px;
          padding: 0;
          list-style: none;
          li {
            padding: 3px 0;
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

function expandIcon({ isActive }: any) {
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
}

const sidebarMenuItems = [
  {
    id: '1',
    title: 'Js Loops Sheet',
    subItem: [
      {
        id: '1.1',
        title: 'Js For Loops',
        path: '/helpers/loops/for-js-loops',
      },
      {
        id: '1.2',
        title: 'Js Do-While Loops',
        path: '/helpers/loops/do-while-js-loops',
      },
      {
        id: '1.3',
        title: 'Js While Loops',
        path: '/helpers/loops/while-js-loops',
      },
      {
        id: '1.4',
        title: 'Js For-in Loops',
        path: '/helpers/loops/for-in-js-loops',
      },
      {
        id: '1.5',
        title: 'Js For-of Loops',
        path: '/helpers/loops/for-of-js-loops',
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="title">Js Helper</div>
      <div className="sidebar-content">
        <CollapseWrapper
          accordion={true}
          openMotion={motion || null}
          defaultActiveKey={sidebarMenuItems[0].id}
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
                    <a href={subItem.path}>{subItem.title}</a>
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
