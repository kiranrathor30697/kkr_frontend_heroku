import axios from "axios";

export const viewBillApi = async () => {
    try {
        const data = await axios.get('http://localhost:8000/api/customerInfo')
        // console.log(data.data,"dadada")
        localStorage.setItem("getCustInfo",JSON.stringify(data.data))
    } catch (error) {
        console.error(error);
    }
}