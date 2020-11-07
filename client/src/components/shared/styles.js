import styled from "styled-components";
export const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20%;
`;
export const SimpleButton =styled('button')`
border:none;
background-color:transparent;
outline:none;
`
export const Vline=styled('div')`
border-left: 2px solid black;
height: 100%;
top:60px;
position: absolute;
left: 60%;
margin-left: -3px;`


export const MiddleDiv = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid steelblue;
  padding: 60px;
  background: white;
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
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;
export const FormSubmit = styled("input")`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const FormInput = styled("input")`
  position: relative;
  width: 100%;
  padding: 2px 2px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormSelsect = styled("select")`
  width: 100%;
  padding: 6px 6px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const HalfFormLabel = styled("label")`
  display: block;
`;

export const ErrorDiv = styled("div")`
  color: #d8000c;
  background-color: #ffd2d2;
`;
export const FormLabel = styled("label")`
  text-align: left;
`;

export const Content = styled.main`
  max-width:${p=>p.maxWidth?p.maxWidth:'500px'};
  margin: ${p=>p.maxWidth?p.topMargin:'40px'} auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  
`;
export const MiniContent = styled.main`
  max-width:${props=>props.size};
  margin: 0 auto 0 auto;
  padding: 0 0;
  box-sizing: border-box;
  font-family: "Open Sans";
  overflow:auto;
 `;
export const FloatLeftDiv = styled("div")`
position:relative;
float:left;
top:${p=>p.top?p.top:'30px'};
left:${p=>p.left?p.left:'200px'};
width:${p=>p.width?p.width:''};
`;

export const FloatRightDiv = styled("div")`
  position: relative;
  float:right;
  right:${p=>p.right?p.right:'60px'};
  top:${p=>p.top?p.top:'0'};
  display:${p=>p.display?p.display:""};
  
`;



export const formBottemDiv = styled("div")`
  position: absolute;
 

`;
export const TopForm = styled("div")`
  position: relative;
  
  left: 80px;
  top:-110px;
  margin-bottom: -110px;
`;


export const FileInput=styled('input')`
position:relative;
top:-20px;
color: transparent;
`
export const Ul=styled('ul')`
border: 0 solid silver;
border-width: 0 0 1px 1px;
list-style-type:none;
`
export const Li=styled('li')`
    border: 0 solid silver;
    border-width: 1px 1px 0 0;
    padding:${p=>p.pad?p.pad:'0.5em'};

`