import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
    
        margin-top:50px;
        height: 70vh;

        display:flex;
        align-items: center;
        justify-content: center;
    `,

    rowCss:
    css`
        align-items:center;
        width:80%;
        height:100%;
    `
    ,
   
    loginForm:css`
        background-color: rgb(225, 238, 245);

        height:100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content:left;
        align-items: center;

        @media (max-width: 768px) {
            width:100%;
            padding:20px;
            overflow-y:auto;
            scrollbar-width:none;
        }
    `,
    loginFormH1:css`
        margin-top:-30px;
    `,

    loginImageContainer:css`
        background-image: url('registration.jpg');
        width: 50%;
        height:100%;
        
        @media (max-width: 768px) {
            width:0; 
        }
    `,
}));