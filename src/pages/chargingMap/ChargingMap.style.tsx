import styled from "styled-components";

export const WidgetContainer = styled.div`
    position: relative;
    z-index: 2;
    height: 100vh;
    .div1 {
        position: absolute;
        padding: 1.5rem;
        width: 100%;
    }
    .div2 {
        position: absolute;
        bottom: 90px;
        padding: 0 8rem;
    }
`;
