
import classNames from "classnames";
import React, { useContext } from 'react';
import { useSelector } from "react-redux";

import { UidContext } from '../../AppContext';
import { Link } from 'react-router-dom';
import Logout from "../../views/logout/logout"

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";


function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };





  const uid = useContext(UidContext);
  const userData = useSelector((state)=> state.userReducer);
  

  const av =  () => {
    console.log(userData.avatar)
    
  };



  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
           
            {uid? (<div style={{ "textTransform":"uppercase" , 
                          "paddingTop": ".3125rem",
                          "paddingBottom": ".3125rem",
                          color: "#ffffff",
                         " marginLeft": "17px",
                          "marginTop": "3px",
                          "fontSize": "1rem"
          }} >
                  <p >Bienvenue , {userData.username}</p>
            </div>):(<p></p>) }
            
             



              {/*<InputGroup className="search-bar">
                <Button color="link" onClick={toggleModalSearch}>
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
            </InputGroup>*/}




              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>




              {uid ? (
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">  
                    {userData.avatar?(<img
                      alt="..."
                      src={require('assets/images/'+userData.avatar).default}
                      
                    />):(<img
                      alt="..."
                      src={require('assets/images/4.png').default}
                      
                    />)}
                    
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <Link tag="li" to="/admin/user-profile">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </Link>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />


                  <Logout/>


                </DropdownMenu>
              </UncontrolledDropdown>):(
                
              <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <div className="photo">
                  <img
                    alt="..."
                    src={require("assets/img/anime3.png").default}
                  />
                </div>
                <b className="caret d-none d-lg-block d-xl-block" />
                <p className="d-lg-none">Log in</p>
              </DropdownToggle>
              
              <DropdownMenu className="dropdown-navbar" right tag="ul">
              
                <Link tag="li" to='/login'>
                  <DropdownItem className="nav-item" >Log in</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
              )}




              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AdminNavbar;
