import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({

    dashtabs:
    css`

        width:100%;
        margin-top:30px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        flex-wrap:wrap;

        @media (max-width: 768px) {
            flex-direction:column;
            height:70vh;
        }
    `,
    tabs:
    css`
        flex-shrink:0.5;
        width:45%;
        height:200px;
        background-color:#00C2FF;
        color:white;
        
        margin:5px;
        text-align:center;
        align-content:center;
        
        font-size:26px;
        font-weight:bold;

        &:hover{
            cursor:pointer;
        }
        
        @media (max-width: 768px) {
            width:100%;
            height:100px;
        }
    `
}));