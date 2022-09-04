import axios from "axios";

const ApiCangular=axios.create({
    baseURL:'https://cangular-api.herokuapp.com',
})


export default ApiCangular; 