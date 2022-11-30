import axios from "axios"


export const loginApi = async (payload,navigate) => {
    try {
        const loginData = await axios.post('http://127.0.0.1:8000/api/login', payload)
        // const loginData = await axios.post('https://1098-223-236-41-72.ngrok.io/api/login', payload)
        if (loginData.status === 200) {
            localStorage.setItem("loginData",JSON.stringify(loginData.data))
            alert('Login Successfully')
            navigate("/createbill")
        }
    } catch (error) {
        console.log(error)
        alert('Invalid credential')
    }
}