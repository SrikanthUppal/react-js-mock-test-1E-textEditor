import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  padding: 18px;
  background-color: #1b1c22;
  width: 100%;
  max-width: 900px;
  height: 90%;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
`
export const Image = styled.img`
  width: 326px;
  margin-top: 50px;
`
export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  border: 1px solid #334155;
  border-radius: 16px;
`
export const ButtonsContainer = styled.ul`
  border-bottom: 1px solid #334155;
  padding: 16px;
  display: flex;
  align-items: center;
  list-style-type: none;
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  margin-right: 16px;
  background: none;
  border: none;
  color: ${props => props.color};
`
export const Button1 = styled.button`
  margin-right: 16px;
  background: none;
  border: none;
  color: ${props => props.color1};
`
export const Button2 = styled.button`
  margin-right: 16px;
  background: none;
  border: none;
  color: ${props => props.color2};
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 88%;
  background: none;
  border: none;
  outline: none;
  padding: 16px;
  color: #f8fafc;
  font-size: 18px;
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
`
