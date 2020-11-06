import styled from "styled-components";
export const Button = styled.button`
  background: ${(props) => (props.primary ? "steelblue" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid steelblue;
  border-radius: 3px;
  width: 50%;
`;
export const MiddleDiv = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid steelblue;
  padding: 40px;
  background:white;
`;

export const HeaderDiv = styled("div")`
  text-align: center;
  color: black;
`;
export const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;
export const FormSubmit=styled('input')`
width: 100%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;`
export const FormInput=styled('input')`
width: 100%;
padding: 6px 6px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;`

export const FormSelsect=styled('select')`
width: 100%;
padding: 6px 6px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`

export const HalfFormLabel=styled('label')`
display:block;`


export const ErrorDiv=styled('div')`
color: #D8000C;
background-color: #FFD2D2;
`
export const FormLabel=styled("label")`
text-align: left;
`
export const Content = styled.main`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    h1, h2, h3, h4, h5, h6{
        font-family: 'Kaushan Script';
    }
`;