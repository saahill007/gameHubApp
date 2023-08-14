
import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'40e707e03fc24ecc843c362b324a8e1f'
    }
})