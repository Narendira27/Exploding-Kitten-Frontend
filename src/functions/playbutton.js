import axios from "axios"
import URL from "../config"
import GendrateRandomCards from "./gedraterandomcards"

const serverReq = async (username) => {
    const response = await axios.post(URL + "user", { username })
    if (response.data.msg === "User Already Exists") {
        const [data] = response.data.data
        return (data)
    } else {
        return ({ username: 0, highestscore: 0, lastscore: 0 })
    }
}

const OnPlayButton = async (username, setPageStatus, setHighestScore, setScore, setCardsList, setLoading) => {
    if (username.length !== 0) {
        setPageStatus("play")
        const res = await serverReq(username)
        setHighestScore(res.highestscore)
        setScore(res.lastscore)
        const list = GendrateRandomCards()
        setCardsList(list)
    }

}


export default OnPlayButton