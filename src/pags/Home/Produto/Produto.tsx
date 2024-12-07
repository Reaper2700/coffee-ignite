import Expresso from "./../../../assets/Cardapio/ExpressoTradicional.png"
import cart from "./../../../assets/ShoppingCartSimple.png"
import { AddToCart, CoffeeCard, CoffeeDescription, CoffeeFooter, CoffeeGrid, CoffeePrice, CoffeeTittle, CoffeMenu, Quantity, QuantityButton, QuantityControl, Tag, Title } from "./styles"

export function Produto() {
    return (
        <CoffeMenu>
            <Title>Nossos Cafés</Title>
            <CoffeeGrid>
                <CoffeeCard>
                    <img src={Expresso} />
                    <Tag>tradiconal</Tag>
                    <CoffeeTittle>Expresso Tradicional</CoffeeTittle>
                    <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
                    <CoffeeFooter>
                        <CoffeePrice>R$ 9,90</CoffeePrice>
                        <QuantityControl>
                            <QuantityButton>-</QuantityButton>
                            <Quantity>1</Quantity>
                            <QuantityButton>+</QuantityButton>
                        </QuantityControl>
                        <AddToCart>
                            <img src={cart} alt="Carrinho" />
                        </AddToCart>
                    </CoffeeFooter>
                </CoffeeCard>
            </CoffeeGrid>
        </CoffeMenu>
    )
}