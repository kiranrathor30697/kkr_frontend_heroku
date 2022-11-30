import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
// import '../css/common.css'

export default function Header() {
  return (
    <>
        <div className="" style={{backgroundColor:"#17202A"}}>
            <div className="container pt-2 pb-2"> 
                <Row>
                    <Col className="text-white ps-0" md={6} sm={4} xs={2}>
                        <Image className="text-center ps-0" width="70"src={require('../images/header.png')} alt={"Image Not Found"}/>
                    </Col>
                    <Col className="text-white d-flex justify-content-end k_fontfamily" md={6} sm={8} xs={10}>
                        <div>
                            <h5 className="fw-bolder k_fontfamily k_color text-center mt-1">KKR SOLUTION</h5>
                            <h6 className='fw-bolder k_fontfamily k_color text-end'>MALHARGARH,( M. P. ) </h6>
                        </div>
                    </Col>
                </Row> 
            </div> 
        </div>
    </>
  )
}
