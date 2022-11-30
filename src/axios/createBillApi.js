import axios from "axios"

export const createBillApi = async (payload,navigate) => {
    console.log(payload,"createBillApi")

    try {
        const result = await axios.post('http://localhost:8000/api/createBill',payload)
        if(result.status === 200){
            localStorage.setItem("cust_data",JSON.stringify(result.data.data))
            navigate('/billitem')
            console.log(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}