import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({

    contentBox1:
    css`
        display:flex;
        flex-direction:row;
       
        justify-content:center;
        background-color:white;
        align-items:center;

        @media (max-width: 768px) {
            flex-direction:column;
            justify-content:center;
        }
    `,

    contentBoxText:
    css`
        display:flex;
        flex-direction:column;
        justify-content:left;
        
        @media (max-width: 768px) {
            justify-content:center;
        }

    `,

    insight:
    css`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        margin:50px 0;
        @media (max-width: 768px) {
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
        }

    `,

    card:
    css`
        width:40%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        margin-top:-30px;
        margin-bottom:15px;

        @media (max-width: 768px) {
            margin-top:-10px;
            flex-direction:column;
            text-align:center;
            justify-content:center;
            font-size:18px;
            margin-bottom:20px;
        }
    `
}));