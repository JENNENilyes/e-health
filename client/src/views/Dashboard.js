/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

import{ React,useState,  useContext } from 'react';
import { useSelector } from "react-redux";
import ImageSlider from "./avatar/Slider";
import { UidContext } from '../AppContext';
import Progressbar from '../variables/Progress_bar';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  UncontrolledDropdown,
  Form,
  Label,
  Input,
  DropdownMenu,
  Row,
  Col,
  DropdownItem,
  UncontrolledTooltip,
  DropdownToggle,
  Table,
} from "reactstrap";

function UserProfile() {


  const uid = useContext(UidContext);
  const userData = useSelector((state)=> state.userReducer);

  const [checked, setChecked] = useState(false);
  const [checkedd, setCheckedd] = useState(false);
  const [checkeddd, setCheckeddd] = useState(false);
  const [checkedddd, setCheckedddd] = useState(false);
  const [checkeddddd, setCheckeddddd] = useState(false);
  const [checkedddddd, setCheckedddddd] = useState(false);

  const [ reslt, setRes] = useState(0);

 
const handleChange = () => {
  console.log(checked)
  setChecked(!checked);
  if (checked===false){
    console.log("+1");
    setRes(reslt+16)
  }else{console.log("-1");
        setRes(reslt-16)}
  

   
};
 /*  if (x===1){
    console.log(x)
    //setChecked(!checked);
    setx(2)
  }
  else{
    if(checked){
      setChecked(!checked);
      setProg(prog + 16)
      console.log(prog) 
    }
    else{
      setChecked(!checked);
      setProg(prog - 16)
      console.log(prog)};
    
      } */     

     


  

const handleChangee = () => {
  console.log(checkedd)
  setCheckedd(!checkedd);
  if (checkedd===false){
    console.log("+1");
    setRes(reslt+16)
  }else{console.log("-1");
        setRes(reslt-16)}
  

   
};
    
      
  
     
    
  const handleChangeee = () => {
    console.log(checkeddd)
  setCheckeddd(!checkeddd);
  if (checkeddd===false){
    console.log("+1");
    setRes(reslt+16)
  }else{console.log("-1");
        setRes(reslt-16)}
  

     
  };

  const handleChangeeee = () => {
    console.log(checkedddd)
    setCheckedddd(!checkedddd);
    if (checkedddd===false){
      console.log("+1");
      setRes(reslt+16)
    }else{console.log("-1");
          setRes(reslt-16)}
    
  
  };

  const handleChangeeeee = () => {
    console.log(checkeddddd)
  setCheckeddddd(!checkeddddd);
  if (checkeddddd===false){
    console.log("+1");
    setRes(reslt+16)
  }else{console.log("-1");
        setRes(reslt-16)}
  
   
    
  };

  const handleChangeeeeee = () => {
    console.log(checkedddddd)
    setCheckedddddd(!checkedddddd);
    if (checkedddddd===false){
      console.log("+1");
      setRes(reslt+16)
    }else{console.log("-1");
          setRes(reslt-16)}
    
  };
















  return (
    <>
      <div className="content">
        <Row>
          
         
         




          <Col md="6">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                   
                   
                   
                    {userData.avatar? (
                      <>
                       <img
                      alt="..."
                      className="avatar"
                      src={require("assets/images/"+userData.avatar).default}
                    />
                    <h5 className="title">{userData.username}</h5>
                    </>):( <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />)}
                   
                    
                  </a>
                  <Progressbar bgcolor="red" progress={reslt}  height={20} />
                </div>

                
                {userData.test=="A" ? (<div className="card-category d-inline">
                  <p>Diabete <br></br>
                    - Don’t forget to always put a piece of candy in your pockets, it can save your life!<br></br>
                  </p>
                </div>):(userData.test=="B"? (<div className="card-category d-inline"><p>
                 STROKE <br></br> 
                  -Journaling it a healthy habit that helps to improve your mood, let’s take 5 minutes to put what we’re feeling into words.<br></br>
                  </p>

                </div>): ( userData.test=="C"? (<div className="card-category d-inline">
                  <p>
                  heart disease:<br></br>
                  Journaling it a healthy habit that helps to improve your mood, let’s take 5 minutes to put what we’re feeling into words

                  </p>

                </div>):(<div className="card-description">
                  
                </div>)) ) }
                


              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                {userData.test ? (<h6 className="title d-inline">Tasks(5) </h6>):(<h6 className="title d-inline">Tasks()</h6>)}
                <p className="card-category d-inline"> today</p>
                <p className="card-category d-inline">{userData.test=="A"?(<>Diabete</>):(userData.test=="B"?(<>STROKE</>):(<>heart disease</>)) }
                </p>

                <UncontrolledDropdown>
                  
                 <p className="card-category d-inline">{userData.test=="A"?(<>Diabete</>):(userData.test=="B"?(<>STROKE</>):(<>heart disease</>)) }</p> 
                  
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <input type="checkbox"  checked={checked}  onChange={handleChange}   />
                              <span className="form-check-sign" >
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        {userData.test=="A" ? ( <td>
                          <p className="title">How about a 15 minute walk today ?</p>
                          <p className="text-muted">
                          When you’re physically active, wear cotton socks and athletic shoes that fit well and are comfortable.
                          </p>
                        </td>):(userData.test=="B"? ( <td>
                          <p className="title">physically active</p>
                          <p className="text-muted">
                          Gardening is so much fun , it gets you outside and physically active, let’s water the plants .
                          </p>
                        </td>):(userData.test=="C"?( <td>
                          <p className="title">-Journaling </p>
                          <p className="text-muted">
                          Journaling it a healthy habit that helps to improve your mood, let’s take 5 minutes to put what we’re feeling into words
                          </p>
                        </td>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                       
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip636901683"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip636901683"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                            <input type="checkbox"  checked={checkedd}  onChange={handleChangee}   />

                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                        {userData.test=="A" ? ( <>
                          <p className="title">Dance</p>
                          <p className="text-muted">
                          -We made you a fun Boogie playlist, let’s dance together!
                          </p>
                        </>):(userData.test=="B"? ( <>
                          <p className="title">karaoke</p>
                          <p className="text-muted">
                          It’s karaoke time! Let’s sing along to music 
                          </p>
                        </>):(userData.test=="C"?( <>
                          <p className="title">How about a 15 minute walk today ?</p>
                          <p className="text-muted">
                          When you’re physically active, wear cotton socks and athletic shoes that fit well and are comfortable.
                          </p>
                        </>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip457194718"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip457194718"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                            <input type="checkbox"  checked={checkeddd}  onChange={handleChangeee}   />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                        {userData.test=="A" ? ( <>
                          <p className="title"> cook  healthy</p>
                          <p className="text-muted">
                          -Let’s cook a healthy tummy filling meal together, here’s a list of yummy recipes.
                          </p>
                        </>):(userData.test=="B"? ( <>
                          <p className="title"> cook  healthy</p>
                          <p className="text-muted">
                          -Let’s cook a healthy tummy filling meal together, here’s a list of yummy recipes.                          </p>
                        </>):(userData.test=="C"?( <>
                          <p className="title"> cook healthy</p>
                          <p className="text-muted">
                          -Let’s cook a healthy tummy filling meal together, here’s a list of yummy recipes.                          </p>
                        </>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip362404923"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip362404923"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                            <input type="checkbox"  checked={checkedddd}  onChange={handleChangeeee}   />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          {userData.test=="A" ? ( <>
                          <p className="title"> move your body </p>
                          <p className="text-muted">
                          -Put on some of your favorite tunes and move your body !
                          </p>
                        </>):(userData.test=="B"? ( <>
                          <p className="title"> move your body</p>
                          <p className="text-muted">
                          -Put on some of your favorite tunes and move your body !
                         </p>
                        </>):(userData.test=="C"?( <>
                          <p className="title"> move your body</p>
                          <p className="text-muted">
                          -Put on some of your favorite tunes and move your body !
                          </p>
                        </>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip818217463"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip818217463"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                            <input type="checkbox"  checked={checkeddddd}  onChange={handleChangeeeee}   />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                        {userData.test=="A" ? ( <>
                          <p className="title"> drink water </p>
                          <p className="text-muted">
                          -Did you drink enough water today ?
                          </p>
                        </>):(userData.test=="B"? ( <>
                          <p className="title"> Yoga</p>
                          <p className="text-muted">
                          -Did you know that Yoga Reduces Stress for Blood Sugar Control? 
                          let’s try this 10 min yoga flow before sleeping

                         </p>
                        </>):(userData.test=="C"?( <td>
                          <p className="title"> drink water</p>
                          <p className="text-muted">
                          -Did you drink enough water today ?
                          </p>
                        </td>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip831835125"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip831835125"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                            <input type="checkbox"  checked={checkedddddd}  onChange={handleChangeeeeee}   />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                        {userData.test=="A" ? ( <>
                          <p className="title"> Yoga </p>
                          <p className="text-muted">
                          -Did you know that Yoga Reduces Stress for Blood Sugar Control? 
                            let’s try this 10 min yoga flow before sleeping
                          </p>
                        </>):(userData.test=="B"? ( <>
                          <p className="title"> Swiming</p>
                          <p className="text-muted">
                          -It’s hot outside, how about a good refreshing swim?

                         </p>
                        </>):(userData.test=="C"?( <>
                          <p className="title"> drink water</p>
                          <p className="text-muted">
                          -Did you drink enough water today ?
                          </p>
                        </>):( <td>
                          <p className="title"></p>
                          <p className="text-muted">
                            
                          </p>
                        </td>)))}
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip217595172"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip217595172"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    </>
  );
}

export default UserProfile;
