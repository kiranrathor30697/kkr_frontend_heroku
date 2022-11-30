const axios = require('axios')
export const registerApi = async (payload,navigate) => {
    // console.log(payload)
    try {
        const registerData = await axios.post('http://127.0.0.1:8000/api/register',payload)
        // const registerData = await axios.post('https://1098-223-236-41-72.ngrok.io/api/register',payload)
        if(registerData.status === 201){
            alert('Registration successfully')
            navigate('/login')
        }
    } catch (error) {
        console.log("erroror")
        console.log(error)
    }
}
