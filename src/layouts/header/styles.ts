import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    nav {
        display: flex;
        gap: 0.5rem;
       

        border-radius: 5px;
        a:first-child {
            background-color: #EBE5F9;
            border-radius: 5px;


            display: flex;
            align-items: center;
            gap: 0.25rem;
            text-decoration: none;

            color: ${(props) => props.theme["purple-dark"]};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            border-left: 1rem;
            padding-right: 8px;
            padding-left: 8px;
            
            &:hover {
                border-bottom: 3px solid ${(props) => props.theme["purple-light"]};
            }

            &.active {
                color: ${(props) => props.theme["purple-light"]};
            }

            span {
                font-size: 0.875rem;
                line-height: 1.5;
            }
        }

        a{
            background-color: ${(props) => props.theme["yellow-light"]};
            color: ${(props) => props.theme["yellow"]};
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-radius: 5px;
            padding: 2px;
        }
    }
`;
