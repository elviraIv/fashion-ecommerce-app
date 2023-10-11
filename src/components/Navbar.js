import React from "react";
import styled from "styled-components";

import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { Space, Badge } from "antd";
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
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Lanuage>EN</Lanuage>
            <SearchContainer>
              <Input />
              <SearchOutlined />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LVRA.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Space size="middle">
                <Badge size="small" count={5}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "130%" }}
                    shape="square"
                    size="large"
                  />
                </Badge>
              </Space>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
