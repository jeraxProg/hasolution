import { useColorMode, Switch, Flex, IconButton } from '@chakra-ui/react'
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import {useRouter} from 'next/router';
import {CustomContainer, CustomNav} from './components';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { searchEmployers } from '../../utils/client/employers';
import { CustomH1 } from '../HomePage/components';


const NavbarComponent = () => {
  const router = useRouter()
  const {t: translate} = useTranslation();
  const {colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode === 'dark'

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 100 ) {
        setShow(true)
      }else{
        setShow(false)
      }
  }

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, []);

    const handleRoute = (route) => {
      if(route == 'home') {
        router.push('/')
      } else if (route == 'careers') {
        router.push('/careers')
      } else if (route == 'about-us') {
        router.push('/about-us')
      }
       else if (route == 'recruitment-info') {
        router.push('/recruitment-info')
      }
       else if (route == 'contact-us') {
        router.push('/contact-us')
      }
    }

    return (
    <div>
      <CustomContainer className="pt-3 pb-3">
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Container>
              <CustomH1><Navbar.Brand href="/">{translate('logo')}</Navbar.Brand></CustomH1>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <CustomNav onClick={() => handleRoute('home')} selected={router.pathname === '/'} >{translate('home')}</CustomNav>
                    {/* <CustomNav href="/jobs-list" selected={router.pathname === '/jobs-list'}>Jobs List</CustomNav> */}
                    <CustomNav onClick={() => handleRoute('careers')} selected={router.pathname === '/careers'}>{translate('careers')}</CustomNav>
                    <CustomNav onClick={() => handleRoute('recruitment-info')} selected={router.pathname === '/recruitment-info'}>{translate('rectruitmentnav')}</CustomNav>
                    <CustomNav onClick={() => handleRoute('about-us')} selected={router.pathname === '/about-us'}>{translate('aboutus')}</CustomNav>
                    <CustomNav onClick={() => handleRoute('contact-us')} selected={router.pathname === '/contact-us'}>{translate('contactus')}</CustomNav>
                    {/* <CustomNav href="/blogs" selected={router.pathname === '/blogs'}>Blogs</CustomNav> */}
                    {/* <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  {/* <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </CustomContainer>
    </div>
    )
}

export default NavbarComponent