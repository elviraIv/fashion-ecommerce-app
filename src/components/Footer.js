import styled from "styled-components";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  DownSquareOutlined,
  MailOutlined,
  PhoneOutlined

} from "@ant-design/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LVRA</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          animi doloremque modi quas nam? Mollitia, praesentium tempore quod at
          ducimus ab dolorum inventore eligendi impedit, harum aut nesciunt nemo
          distinctio!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookOutlined style={{ fontSize: "150%"}} />
          </SocialIcon>
          <SocialIcon>
            <InstagramOutlined style={{ fontSize: "150%" }} />
          </SocialIcon>
          <SocialIcon>
            <TwitterOutlined style={{ fontSize: "150%" }} />
          </SocialIcon>
          <SocialIcon>
            <YoutubeOutlined style={{ fontSize: "150%" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <DownSquareOutlined style={{marginRight:'10px'}}/>
          3236 Bryan Avenue, Eagan 55121
        </ContactItem>
        <ContactItem>
          <PhoneOutlined style={{marginRight:'10px'}} />
          612-388-3980
        </ContactItem>
        <ContactItem>
         <MailOutlined style={{marginRight:'10px'}} />
            contact@lvra.dev
        </ContactItem>
       <Payment src = 'https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png'/>
      </Right>
    </Container>
  );
};

export default Footer;
