import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { sidebarMenuItems } from '../assets/db/sidebarMenuItems';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn-navigation {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    border-radius: 8px;
    transition: 300ms;
  }
`;

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log('router', router);
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

  const afterItemId = Number(activeItem?.id) + Number(0.1);
  const afterItem = currentMenuItem?.subItem?.find(
    (f) => f.id === afterItemId.toFixed(1)
  );

  console.log('beforeItem', beforeItem);
  console.log('afterItem', afterItem);

  const isVisibleFooter = pathname !== '/';
  if (!isVisibleFooter) return null;
  return (
    <FooterWrapper>
      <div className="btn-navigation">
        {beforeItem && (
          <Link
            href={`/${beforeItem?.path}`}
            as={`/${beforeItem?.path}`}
            passHref
          >
            <a>Previous Page</a>
          </Link>
        )}
      </div>
      <div className="btn-navigation">
        {afterItem && (
          <Link
            href={`/${afterItem?.path}`}
            as={`/${afterItem?.path}`}
            passHref
          >
            <a>Next Page</a>
          </Link>
        )}
      </div>
    </FooterWrapper>
  );
};

export default Footer;
