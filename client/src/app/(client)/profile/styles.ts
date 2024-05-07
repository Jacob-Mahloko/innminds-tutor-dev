import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
       
    `,
    topContainer:
    css`
        margin-top:50px;
        width:100%;
        
        display:flex;
        align-items:center;
        justify-content:center;

        padding:10px;

        background-color:lightblue;

        border-radius:5px;

        @media (max-width: 768px){

            flex-direction:column;
        }
    `,
    profileImage:
    css`
       
        height:150px;
        width:150px;
        border-radius:50%;
    `,
    buttonContainer:
    css`
        margin-left:20px;
        width:100px;
        color:white;

        @media (max-width: 768px){
            margin-top:30px;
         }
        
    `,
    about:
    css`
        width:40%;
        margin-left:50px;

        @media (max-width: 768px){
           width:100%;
           margin-left:0px;
           margin-top:10px;
        }
    `,
    mainContainer:
    css`
        margin-top:30px;
        border: 2px solid lightblue;
        padding:50px;

        width:100%;
    `,
    form:
    css`
        display:flex;
        flex-direction:row;

        @media (max-width: 768px){
            flex-direction:column;
        }
    `,

    formInput2:
    css`
        width:45%;
        margin-left:20px;

        @media (max-width: 768px){
            width:100%;
           margin-left:0px;
        }

    `,
    formInput1:
    css`
        width:45%;
        

        @media (max-width: 768px){
            width:100%;
        }

    `
}));