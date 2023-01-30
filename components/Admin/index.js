import { useState } from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import { HiOutlineLogout, HiOutlineUserGroup } from "react-icons/hi"
import { BsPerson } from "react-icons/bs"
import AddEmployersComponent from "./AddEmployers"
import EmployersComponent from "./Employers"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Link from "next/link"
import {
  AdminContainer,
  CustomOffcanvas,
  CustomDiv,
  Content,
  CustomOffcanvasHeader,
  AddEmpButton
} from "./components"
import { Stack } from "react-bootstrap"

const Admin = ({ employers, cat_list, adminState }) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState("employers")

  const { setLoggedIn } = adminState

  // For Modals
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  let component

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow(s => !s)

  const handleActiveTab = value => {
    setActive(value)
  }

  if (employers) {
    if (active === "employers") {
      component = employers.map((employer, i) => {
        return (
          <EmployersComponent key={i} employer={employer} cat_list={cat_list} />
        )
      })
    } else if (active === "categories") {
    }
  }

  return (
    <AdminContainer>
      <CustomOffcanvas
        show={true}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <CustomOffcanvasHeader>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </CustomOffcanvasHeader>
        <Offcanvas.Body className="p-0">
          <CustomDiv
            onClick={() => handleActiveTab("categories")}
            selected={active === "categories"}
          >
            <BsPerson />
            Categories
          </CustomDiv>
          <CustomDiv
            onClick={() => handleActiveTab("employers")}
            selected={active === "employers"}
          >
            <HiOutlineUserGroup />
            Company Jobs
          </CustomDiv>
          <Link href="/">
            <CustomDiv onClick={() => setLoggedIn(false)}>
              <HiOutlineLogout />
              Log Out
            </CustomDiv>
          </Link>
        </Offcanvas.Body>
      </CustomOffcanvas>
      <Content>
        {active === "employers" && (
          <AddEmpButton variant="primary" onClick={handleShowModal}>
            Add Job
          </AddEmpButton>
        )}
        <br />
        <br />
       <Stack style={{flexWrap:"wrap"}} gap={3} direction="horizontal">{component}</Stack> 
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Company Jobs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEmployersComponent cat_list={cat_list} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Content>
    </AdminContainer>
  )
}

export default Admin
