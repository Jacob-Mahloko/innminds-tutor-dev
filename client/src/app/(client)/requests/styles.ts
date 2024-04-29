import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
        width:100%;
        margin-top:50px;    

        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;

    `
    ,
    imageContainer:
    css`
        background-image: url('service.jpg');
        width: 60vb;
        height:70vh;

        @media (max-width: 768px) {
            width:0; 
        }
    `,

    content:
    css`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border:5px solid lightblue;
        border-radius:5px;

        width:70vb;
        height:70vh;

        @media (max-width: 768px){
            height:60vh;
            width:100%;
        }
    `,
    loginFrom:
    css`
        width:60vb;
        height:80%;
        displat:flex;
        flex-direction:column;

        @media(max-width:768px){
            width:100%;
            height:90%;
            margin-top:-20px
            
            border-radius:8px;
        }
    `,
    inputForm:
    css`
        
    `
}));