import cafe from "./../../assets/cafe.png"
import IconeCarrinho from "./../../assets/IconeCarrinho.png"
import Relogio from "./../../assets/Relogio.png"
import cafezinho from "./../../assets/cafezinho.png"
import caixa from "./../../assets/caixa.png"

import { IntroContainer } from "./styles"
import { Produto } from "./Produto/Produto"

export function Home() {
    return (
        <div>
            <section className="Container">
                <IntroContainer>
                    <div className="left">
                        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        <div className="characteristics">
                            <div className="item">
                                <img src={IconeCarrinho} />
                                <p>Compra simples e segura</p>
                            </div>
                            <div className="item">
                                <img src={Relogio} />
                                <p>Entrega rápida e rastreada</p>
                            </div>
                            <div className="item">
                                <img src={caixa} />
                                <p>Embalagem mantém o café intacto</p>
                            </div>
                            <div className="item">
                                <img src={cafezinho} />
                                <p>O café chega fresquinho até você</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={cafe} />
                    </div>
                </IntroContainer>
            </section>

            <Produto>
                
            </Produto>
        </div>
    );
}