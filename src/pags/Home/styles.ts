import styled from "styled-components";

export const IntroContainer = styled.div`
    padding-top: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .left {
        flex: 1; /* Ocupa metade do espaço */
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


        strong{
            font-size: 46px;
            font-family: 'Baloo2', sans-serif;
            font-weight: 700;
            max-width: 36.75rem;
            color: #333;
        }

        span{
            font-size: 20px;
            max-width: 34rem;
            color: #555;
        }

        .characteristics{
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 1rem;
            
            .item{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                max-width: 20rem;
            }

            img{
            width: 2rem;
            height: 2rem;
            }

            p {
                font-size: 16px;
                color: #333;
            }
        }
 
        .right {
        flex: 1; /* Ocupa metade do espaço */
        display: flex;
        justify-content: center; /* Centraliza a imagem horizontalmente */
        align-items: center; /* Centraliza a imagem verticalmente */
    }

        img{
            width: 476px;  /* Largura fixa */
            height: 360px; /* Altura fixa */
            object-fit: contain; 
        }

    .c{

    }
`