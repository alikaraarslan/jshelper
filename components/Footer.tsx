import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { sidebarMenuItems } from '../assets/db/sidebarMenuItems';

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

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;

  const jsDirectoryName = pathname?.split?.('/')?.[2]?.split?.('/')?.[0];
  const currentMenuItem = sidebarMenuItems.find(
    (item) => item.key === jsDirectoryName
  );
  const activeItem = currentMenuItem?.subItem?.find(
    (f) => f?.path === pathname
  );

  const beforeItemId = Number(activeItem?.id) - Number(0.1);
  const beforeItem = currentMenuItem?.subItem?.find(
    (f) => f.id === beforeItemId.toFixed(1)
  );

  console.log('beforeItem', beforeItem);

  const afterItemId = Number(activeItem?.id) + Number(0.1);
  const afterItem = currentMenuItem?.subItem?.find(
    (f) => f.id === afterItemId.toFixed(1)
  );
  console.log('afterItem', afterItem);

  const isVisibleFooter = pathname !== '/';
  if (!isVisibleFooter) return null;
  return (
    <FooterWrapper>
      <div
        className="btn-navigation"
        style={beforeItem === undefined ? { cursor: 'not-allowed' } : {}}
      >
        <Link
          href={beforeItem !== undefined ? `/${beforeItem?.path}` : '#'}
          passHref
        >
          <a
            className="navigation-text"
            style={
              beforeItem === undefined
                ? {
                    pointerEvents: 'none',
                    cursor: 'not-allowed',
                    alignItems: 'flex-start',
                  }
                : {
                    alignItems: 'flex-start',
                  }
            }
          >
            <span>{beforeItem?.title || 'Started'}</span>
            Previous Page
          </a>
        </Link>
      </div>
      <div
        className="btn-navigation"
        style={afterItem === undefined ? { cursor: 'not-allowed' } : {}}
      >
        <Link
          href={afterItem !== undefined ? `/${afterItem?.path}` : '#'}
          passHref
        >
          <a
            className="navigation-text"
            style={
              afterItem === undefined
                ? {
                    pointerEvents: 'none',
                    cursor: 'not-allowed',
                    alignItems: 'flex-end',
                  }
                : {
                    alignItems: 'flex-end',
                  }
            }
          >
            <span>{afterItem?.title || 'Ended'}</span>
            Next Page
          </a>
        </Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
