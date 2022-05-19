import styled from 'styled-components';
import Link from 'next/link';
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');
import motion from '../utils/motionUtil';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
      max-height: calc(100vh - 400px);
      overflow-y: auto;
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #3e3e3e;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
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
    key: 'loops',
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
  {
    id: '2',
    title: 'Js ES6 Sheet',
    key: 'es6',
    subItem: [
      {
        id: '2.1',
        title: 'Js Arrow Functions',
        path: '/helpers/es6/arrow-functions',
      },
      {
        id: '2.2',
        title: 'Default parameters',
        path: '/helpers/es6/default-parameters',
      },
      {
        id: '2.3',
        title: 'Let Scope',
        path: '/helpers/es6/let-scope',
      },
      {
        id: '2.4',
        title: 'Const Scope',
        path: '/helpers/es6/const-scope',
      },
      {
        id: '2.5',
        title: 'Multiline strings',
        path: '/helpers/es6/multiline-strings',
      },
      {
        id: '2.6',
        title: 'Template strings',
        path: '/helpers/es6/template-strings',
      },
      {
        id: '2.7',
        title: 'Exponent operator',
        path: '/helpers/es6/exponent-operator',
      },
      {
        id: '2.8',
        title: 'Spread operator',
        path: '/helpers/es6/spread-operator',
      },
      {
        id: '2.9',
        title: 'String includes()',
        path: '/helpers/es6/string-includes',
      },
      {
        id: '2.10',
        title: 'String startsWith()',
        path: '/helpers/es6/string-starts-with',
      },
      {
        id: '2.11',
        title: 'String repeat()',
        path: '/helpers/es6/string-repeat',
      },
      {
        id: '2.12',
        title: 'Destructuring array',
        path: '/helpers/es6/destructuring-array',
      },
      {
        id: '2.13',
        title: 'Destructuring object',
        path: '/helpers/es6/destructuring-object',
      },
      {
        id: '2.14',
        title: 'Object property assignment',
        path: '/helpers/es6/object-property-assignment',
      },
      {
        id: '2.15',
        title: 'Object.assign()',
        path: '/helpers/es6/object-assign',
      },
      {
        id: '2.16',
        title: 'Promises with finally',
        path: '/helpers/es6/promises-with-finally',
      },
      {
        id: '2.17',
        title: 'Object function assignment',
        path: '/helpers/es6/object-function-assignment',
      },
      {
        id: '2.18',
        title: 'Object.entries()',
        path: '/helpers/es6/object-entries',
      },
      {
        id: '2.19',
        title: 'Object Spread operator',
        path: '/helpers/es6/object-spread-operator',
      },
      {
        id: '2.20',
        title: 'Destructuring Nested Objects',
        path: '/helpers/es6/destructuring-nested-objects',
      },
    ],
  },
  {
    id: '3',
    title: 'JavaScript Arrays Sheet',
    key: 'arrays',
    subItem: [
      {
        id: '3.1',
        title: 'Assigning array items to variables',
        path: '/helpers/arrays/assigning-array-items-to-variables',
      },
      {
        id: '3.2',
        title: 'Skipping items',
        path: '/helpers/arrays/skipping-items',
      },
      {
        id: '3.3',
        title: 'Assigning the first values, storing the rest together',
        path: '/helpers/arrays/assigning-the-first-values-storing-the-rest-together',
      },
      {
        id: '3.4',
        title: 'Swapping variables',
        path: '/helpers/arrays/swapping-variables',
      },
    ],
  },
  {
    id: '4',
    title: 'JavaScript Strings Sheet',
    key: 'strings',
    subItem: [
      {
        id: '4.1',
        title: 'charAt()',
        path: '/helpers/strings/char-at',
      },
      {
        id: '4.2',
        title: 'concat()',
        path: '/helpers/strings/concat',
      },
      {
        id: '4.3',
        title: 'indexOf()',
        path: '/helpers/strings/index-of',
      },
      {
        id: '4.4',
        title: 'lastIndexOf()',
        path: '/helpers/strings/last-index-of',
      },
      {
        id: '4.5',
        title: 'replace()',
        path: '/helpers/strings/replace',
      },
      {
        id: '4.6',
        title: 'search()',
        path: '/helpers/strings/search',
      },
      {
        id: '4.7',
        title: 'slice(start, end)',
        path: '/helpers/strings/slice',
      },
      {
        id: '4.8',
        title: 'substr(start, length)',
        path: '/helpers/strings/substr',
      },
      {
        id: '4.9',
        title: 'substring(start, end)',
        path: '/helpers/strings/substring',
      },
      {
        id: '4.10',
        title: 'toUpperCase()',
        path: '/helpers/strings/to-upper-case',
      },
      {
        id: '4.11',
        title: 'toLowerCase()',
        path: '/helpers/strings/to-lower-case',
      },
      {
        id: '4.12',
        title: 'valueOf()',
        path: '/helpers/strings/value-of',
      },
      {
        id: '4.13',
        title: 'trim()',
        path: '/helpers/strings/trim',
      },
      {
        id: '4.14',
        title: 'toString()',
        path: '/helpers/strings/to-string',
      },
      {
        id: '4.15',
        title: 'includes()',
        path: '/helpers/strings/includes',
      },
      {
        id: '4.16',
        title: 'charCodeAt()',
        path: '/helpers/strings/char-code-at',
      },
      {
        id: '4.17',
        title: 'match()',
        path: '/helpers/strings/match',
      },
      {
        id: '4.18',
        title: 'split()',
        path: '/helpers/strings/split',
      },
    ],
  },
  {
    id: '5',
    title: 'JavaScript Async/Await',
    key: 'async-await',
    subItem: [
      {
        id: '5.1',
        title: 'Async',
        path: '/helpers/async-await/async',
      },
      {
        id: '5.2',
        title: 'Await',
        path: '/helpers/async-await/await',
      },
    ],
  },
  {
    id: '6',
    title: 'JavaScript API Calls',
    key: 'api-calls',
    subItem: [
      {
        id: '6.1',
        title: 'XML HTTP Request',
        path: '/helpers/api-calls/xml-http-request',
      },
      {
        id: '6.2',
        title: 'Fetch',
        path: '/helpers/api-calls/fetch',
      },
      {
        id: '6.3',
        title: 'Axios',
        path: '/helpers/api-calls/axios',
      },
      {
        id: '6.4',
        title: 'JQuery AJAX',
        path: '/helpers/api-calls/jquery-ajax',
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
