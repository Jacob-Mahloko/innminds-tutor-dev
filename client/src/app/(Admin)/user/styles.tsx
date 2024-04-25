import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
        height:70vh;

        @media (max-width:768px){
            height:60vh;
        }
    `,
    content:
    css`
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;

       height:70vh;
       width:100%;

       @media(max-width:768px){
        margin-top:100px;
        justify-content:flex-start;
        height:50vh;
       }
    `,
    button:
    css`
        background-color:green;
        color:white;
        font-size:26px;

        height:100px;
        width:400px;

        &:hover{
            background-color:green !important;
            color:white ! important;
            border:3px solid white ! important; 
        }

        @media(max-width:768px){
            
            width:100%;
       }
        
    `
}));