import NavBar from "../components/navbar"
import GameInitialElement from "../components/gameinitail"
import GameOverElement from "../components/gameover"
import GamePlayElement from "../components/gameplay"
import Loader from "../components/loader"

import OnPlayButton from "../functions/playbutton"
import { onclickCard } from "../functions/cardfunctions"

import { useState } from "react"



const PlayPage = () => {

    // state 
    const [pageStaus, setPageStatus] = useState("initial") // initial , play , gameover

    const [cardsList, setCardsList] = useState([])

    const [defuse, setDefuse] = useState(0)

    const [loading, setLoading] = useState(false)

    const [username, setUsername] = useState("")

    const [score, setScore] = useState(0)

    const [highestScore, setHighestScore] = useState(0)

    //fn

    const clickCard = (id, name) => {
        onclickCard(id, name, cardsList, setScore, setDefuse, setCardsList, defuse, setPageStatus, username, score)
    }


    const renderPage = () => {

        switch (pageStaus) {
            case "initial":
                return <GameInitialElement onclick={() => OnPlayButton(username, setPageStatus, setHighestScore, setScore, setCardsList)} onchange={(e) => setUsername(e)} />
            case 'play':
                return <GamePlayElement defuse={defuse} score={score} highestScore={highestScore} cardsList={cardsList} onclickCard={(id, name) => { clickCard(id, name) }} />

            case 'gameover':
                return <GameOverElement onclick={() => OnPlayButton(username, setPageStatus, setHighestScore, setScore, setCardsList, setLoading)} />
        }

    }

    const render = () => {
        if (!loading) {
            return (<div className="h-screen w-screen bg-white ">
                < NavBar />
                {renderPage()}
            </div>)
        }
        return <Loader />
    }

    return render()
}

export default PlayPage