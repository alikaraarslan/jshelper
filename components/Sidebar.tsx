import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 300px;
  height: calc(100vh - 60px);
  background: #050505;
  padding: 30px;
  color: white;
  border-radius: 12px;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="title">Js Helper</div>
      <div>Js Helper Element List</div>
    </SidebarWrapper>
  );
};

export default Sidebar;
