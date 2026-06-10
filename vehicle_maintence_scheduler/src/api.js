const axios = require('axios')
require("dotenv").config()

const url = "http://4.224.186.213/evaluation-service"

async function getDepots() {
    const res = await axios.get(`${url}/depots`,{
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    })
    console.log(res.data);
    
    return res.data
}

async function getTasks() {
    const res = await axios.get(`${url}/vehicles`,{
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    })
    console.log(res.data);
    
    return res.data
}

module.exports = { getDepots, getTasks}