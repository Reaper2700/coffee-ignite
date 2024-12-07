import styled from "styled-components";

export const CoffeMenu = styled.div`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;

`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

export const CoffeeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CoffeeCard = styled.div`
    width:250px;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0, 0.1);
    padding: 20px;
    text-align: center;
    
    .img{
        flex-direction: column;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto 10px;
        object-fit: cover;
    }
`

export const Tag = styled.span`
  display: inline-block;
  background-color: #f8e6c2;
  color: #b58900;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const CoffeeTittle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
`
export const CoffeeDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin: 10px 0 20px;
`;

export const CoffeeFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const CoffeePrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  background-color: #eee;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #555;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const AddToCart = styled.button`
  background-color: #7d40e7;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;