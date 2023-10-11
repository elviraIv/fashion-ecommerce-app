import React from "react";
import styled from "styled-components";

import { SearchOutlined } from "@ant-design/icons";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lanuage = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightblue;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Lanuage>EN</Lanuage>
            <SearchContainer>
              input
              <SearchOutlined />
            </SearchContainer>
          </Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
