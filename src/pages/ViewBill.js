import moment from 'moment';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { viewBillApi } from '../axios/viewBillApi';
import Header from '../Layouts/Header'


var totalAmount = []

export default function ViewBill() {
    const navigate = useNavigate();
    const custData = JSON.parse(localStorage.getItem("cust_data"))
    const itemData = JSON.parse(localStorage.getItem("itemData"))
    const custInfoData = JSON.parse(localStorage.getItem("getCustInfo"))
    const [viewData, setViewData] = useState()

    useEffect(() => {

        viewBillApi()

    }, [])

    useEffect(() => {
        items()
    }, [custInfoData])
    const genrateBill = () => {
        window.print()
        // localStorage.clear()
        // navigate("/")
    }

    const items = () => {
        let item = custInfoData.filter((ele) => {
            return ele._id === custData._id
        })
        setViewData({ ...viewData, item })
    }

    const totalItem = (data) => {
        console.log(data, "ddddddddddddddd")
        if (Array.isArray(data)) {
            totalAmount = 0;
            for (let i = 0; i < data.length; i++) {
                totalAmount += Number(data[i].info.quantity) * Number(data[i].info.price)
            }
            return totalAmount;
        }
        return 0;
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className=" mt-3">
                    <h6 className="">Date - {moment(new Date()).format("DD/MM/YYYY")} </h6>
                </div>

                <div className='offset-4'>
                    <div className="mt-3 row">
                        <h6 className="col-4">Customer Name </h6>-
                        <h6 className="col-6 ms-2">{custData.cust_name}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">Phone Number </h6>-
                        <h6 className="col-6 ms-2">{custData.phoneNumber}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">Address </h6>-
                        <h6 className="col-6 ms-2">{custData.address}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">State</h6>-
                        <h6 className="col-6 ms-2">{custData.state}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">District</h6>-
                        <h6 className="col-6 ms-2">{custData.dist}</h6>
                    </div>

                    <div className="mt-3 row">
                        <h6 className="col-4">City</h6>-
                        <h6 className="col-6 ms-2">{custData.city}</h6>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button className='btn btn-success' onClick={() => { navigate("/billitem") }}>Add item</button>
                </div>

                <Table striped bordered hover className="mt-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price/Unit</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            custInfoData.filter((ele) => {
                                return ele._id === custData._id
                            }).map((item, id, arr) => {
                                return <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{item.info.item}</td>
                                    <td>{item.info.quantity}</td>
                                    <td>{item.info.price}</td>
                                    <td>{item.info.price * item.info.quantity}</td>
                                </tr>
                            })
                        }

                        {/* {
                            itemData.map((item, id, arr) => {
                                totalAmount.push(item.amount)
                                return (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{item.price * item.quantity}</td>
                                    </tr>
                                )
                            })
                        } */}
                        <tr>
                            <td colSpan="4">Total</td>
                            <td>
                                {/* {totalItem(itemData)} */}
                                {
                                    totalItem(viewData)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="">
                                <button className='btn btn-secondary bg-secondary' onClick={genrateBill}>Generate Bill</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
