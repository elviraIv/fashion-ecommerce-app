import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`;

const Amount = styled.span`
width: 30px;
height: 30px;
   border-radius: 6px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 5px;
`;

const Button = styled.button`

padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
margin-left: 100px;


&:hover{
    background-color: #f8f4f4;
}

`;

const Add = styled.button`
margin: 10px;
background-color: white;
border: none;
font-size: 30px;
cursor: pointer;
`;

const Remove = styled.button`
margin: 10px;
background-color: white;
border: none;
font-size: 40px;
cursor: pointer;
`;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://134315795.cdn6.editmysite.com/uploads/1/3/4/3/134315795/s762990293642890610_p2089_i1_w1920.jpeg?width=2400&optimize=medium" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit eius atque similique, ratione tenetur corrupti dolorem
            fugit sunt dolor quis veniam dignissimos qui quaerat accusantium?
            Illum ea corporis ipsam!
          </Desc>
          <Price>$ 299</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove>-</Remove>
              <Amount>1</Amount>
              <Add>+</Add>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLatter />
      <Footer />
    </Container>
  );
};

export default Product;
