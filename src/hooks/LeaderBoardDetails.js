import { useEffect, useState } from "react"
import URL from "../config"
import axios from 'axios'

const UseLeaderBoardDetails = () => {
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        setIsLoading(true)
        setResponse([])
        const req = await axios.get(URL + "leaderboard")
        setResponse(req.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
        const uniqueId = setInterval(() => {
            getData()
        }, 1000 * 5)
        return (() => {
            clearInterval(uniqueId)
        })
    }, [])

    // console.log(response, isLoading)

    return ({ response, isLoading })
}

export default UseLeaderBoardDetails