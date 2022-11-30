import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { billItemApi } from '../axios/billItemApi';
import { Footer } from '../Layouts/Footer';
import Header from '../Layouts/Header';
import { billItemValidation } from './Validation/validation';

let initialState = {
    item:"",
    quantity:"",
    price:""
}

var data = []

export default function BillItem() {
    const navigate = useNavigate()
    const [billItem, setBillItem] = useState(initialState)
    const [error, setError] = useState([])

    const handleChange = (e) => {
        const { name , value } = e.target;
        let newData = {[name]:value}

        setBillItem({
            ...billItem,
            [name]:value
        })

        const { err } = billItemValidation(newData)
        setError({
            ...error,
            ...err
        })
    }

    const createBillItem = (e) => {
        e.preventDefault()
        const { err, valid } = billItemValidation(billItem)
        setError(err)
        if (!valid) return;

        const getCustData = JSON.parse(localStorage.getItem("cust_data"))
        
        console.log("billllllldata",billItem)

        data.push(billItem)
        billItemApi(billItem,getCustData._id)
        localStorage.setItem("itemData",JSON.stringify(data))
        navigate("/viewbill")
    }
  return (
    <>
        <Header />
        <div className='d-flex justify-content-center mt-5'>
            <form className='bg_color p-4 rounded w-75 k_register' onSubmit={createBillItem}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-white text-center fw-bold mt-2 mb-3">Bill Item</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Item Name
                            </label>
                            <input
                                type="text"
                                name="item"
                                className="form-control"
                                placeholder="Enter Your Item Name"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{error.item}</p>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                // ref={inputRef}
                                className="form-control"
                                placeholder="Enter Your Quantity"
                                onChange={handleChange}
                                // onWheel={onNum}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{error.quantity}</p>
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="form-group mb-2">
                            <label
                                className="form-label mb-1 text-white">
                                Price/Unit
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="form-control"
                                placeholder="Enter Your Price/Unit"
                                onChange={handleChange}
                            />
                        </div>
                        <p className='text-danger text-center m-0'>{error.price}</p>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center mt-3">
                        <button type='submit' className="btn btn-light me-5">Submit</button>
                        <button className="btn btn-light ms-5" onClick={()=>{navigate("/viewbill")}}>Back</button>
                    </div>

                </div>
            </form>
        </div>
        <Footer />
    </>
  )
}
