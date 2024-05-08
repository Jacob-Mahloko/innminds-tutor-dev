import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
        width:30%;
        border:4px solid lightblue;
        height:70vh;

        @media(max-width:768px){
            width:100%;
        }
    `,
    calendar:
    css`
        width:70%;
        height:100%;
        @media(max-width:768px){
            width:100%;
        }

    `,
    sideBar:
    css`
        width:100%;
        display:flex;
        flexDirection:row;

        @media (max-width: 768px){
            flex-direction:column;
        }
    `,
}));