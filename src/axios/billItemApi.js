import axios from "axios"

export const billItemApi = async (payload,id) => {
   payload._custId  = id
   console.log("lllllllll",payload,id)
    try {
        const result = await axios.post("http://localhost:8000/api/billItem",payload)

        console.log(result,"result")
    } catch (error) {
        
    }
}