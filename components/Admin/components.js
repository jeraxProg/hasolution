import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Offcanvas from "react-bootstrap/Offcanvas"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const AdminContainer = styled.div`
  padding-left: 300px;
`

export const CustomOffcanvas = styled(Offcanvas)`
  width: 300px !important;
  background: #3c4b64;
`

export const CustomDiv = styled.div`
  cursor: pointer;
  color: ${props => (props.selected ? "#ebedef" : "hsla(0,0%,100%,.6)")};
  padding: 1rem;
  background: ${props => (props.selected ? "#9da5b1" : "unset")};
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Content = styled.div`
  padding: 3rem;
`

export const CustomOffcanvasHeader = styled(Offcanvas.Header)`
  color: #ebedef;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const CustomCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CustomCard = styled(Card)`
  width: 400px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    border: 1px solid #9da5b1;
    box-shadow: 0 10px 20px -5px rgb(10 42 105 / 6%);
  }
`

export const AddEmpButton = styled(Button)`
  display: flex;
  margin-left: auto;
`
