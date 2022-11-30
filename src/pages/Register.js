import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { registerApi } from '../axios/registerApi'
import { Footer } from '../Layouts/Footer'
import Header from '../Layouts/Header'
import { registerValidation } from './Validation/validation'

export const Register = () => {
    let navigate = useNavigate();
    const [data,setData] = useState({
        username:"",
        email:"",
        dob:"",
        password:"",
        confirmPassword:""
    })
    const [errorMsg,setErrorMsg] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target
        let newData = {[name]:value}

        if (name === "confirmPassword")
        newData = { ...newData, ["password"]: data.password }

        setData({
            ...data,
            [name]:value
        })

        const {error} =  registerValidation(newData,navigate)
        setErrorMsg({
            ...errorMsg,
            ...error
        })

    }

    const handleRegister = (e) => {
        e.preventDefault()

        const {error , isValid } = registerValidation(data)

        setErrorMsg(error)
         if(!isValid) return

         registerApi(data,navigate)

    }
  return (
    <div>
        <Header />
        <Row>
            <Col>
                <div className="d-flex justify-content-center mt-5">
                    <Form className="bg_color p-3 k_register rounded shadow-lg">
                        <h5 className='text-light text-center'>Register Form</h5>

                        <Form.Group className="mb-1" controlId="formBasicUsername">
                            <Form.Label className="text-light">User Name</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter UserName" onChange={handleChange} />
                        </Form.Group>
                        <div className='text-danger'>{errorMsg.username}</div>

                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label className="text-light">Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
                        </Form.Group>
                        <div className='text-danger'>{errorMsg.email}</div>

                        <Form.Group className="mb-1" controlId="formBasicdob">
                            <Form.Label className="text-light">DateOfBirth</Form.Label>
                            <Form.Control type="date" className='text_color' name="dob" placeholder="Enter Date Of Birth" onChange={handleChange} />
                        </Form.Group>
                        <div className='text-danger'>{errorMsg.dob}</div>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label className="text-light" >Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
                        </Form.Group>
                        <div className='text-danger' style={{width: "500px"}} >{errorMsg.password}</div>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPasswordf">
                            <Form.Label className="text-light" >Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" placeholder="Enter Confirm Password" onChange={handleChange} />
                        </Form.Group>
                        <div className='text-danger'>{errorMsg.confirmPassword}</div>

                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary" type="submit" className="btn btn-light me-3 text-secondary" onClick={()=>{navigate('/login')}}>
                                Login
                            </Button>

                            <Button variant="secondary" type="submit" className="btn btn-light ms-3 text-secondary" onClick={handleRegister}>
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
        <Footer />
    </div>
  )
}
