import styled from 'styled-components'

export const Container= styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
background-image: linear-gradient(to right,#ffeeee, #ffc0bb);

`
export const CardContainer =styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 50%;
`

export const Header=styled.h1`
  color: #0f172a;
  text-align: center;
  
`

export const ListContainer= styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style-type: none;
  padding-left: 0px;

`
export const ItemContainer=styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoImage=styled.img`
  width: 50%;
  cursor: pointer;
`
export const Name=styled.p`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
`

export const LoveEmoji=styled.img`
  width: 20%;
`
export const ThankYou=styled.h1`
  color: #0f172a;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

`
export const Support =styled.p`
 color: #1e293b;
 font-size: 15px;
 
`