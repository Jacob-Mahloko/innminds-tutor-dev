import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
       
    `,

    tabsContainer:
    css`
        display:flex;
        flex-direction:row;

        justify-content:center;
        width:100%;

        margin-top:10px;

        @media(max-width:768px){
            flex-direction:column;
        }
    `,
    tab:
    css`
        width:30%;
        height:50px;

        background-color:#24486e;
        margin-left:3px;
        border-radius:5px;

        text-align:center;
        align-content:center;

        font-size:16px;

        color:white;
        @media(max-width:768px){
            flex-direction:column;
            margin-top:5px;
            margin-left:0px;
            width:100%;
        }

    `
}));