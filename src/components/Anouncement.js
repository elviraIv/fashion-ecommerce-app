import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight:  300;
`


const Anouncement = () => {
  return (
<Container>
    Weekend Bonus! Free Shipping on Orders over $100!
</Container>
    )
}

export default Anouncement