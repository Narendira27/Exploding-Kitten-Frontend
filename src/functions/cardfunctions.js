import GendrateRandomCards from "./gedraterandomcards"
import { disableClick, enableClick } from "./handleClick"

import axios from "axios"
import URL from "../config"


export const revealCardfn = (id, cardsList, setCardsList) => {
    disableClick(cardsList, setCardsList)
    const modified = cardsList.map((each) => {
        if (each.id === id) {
            const update = each
            update.reveal = true
            return update
        }
        return each
    })
    setCardsList(modified)
}

export const removeCardfn = (id, cardsList, setCardsList) => {
    revealCardfn(id, cardsList, setCardsList)
    setTimeout(() => {
        const modified = cardsList.filter((each) => each.id !== id)
        setCardsList(modified, enableClick(cardsList, setCardsList))
    }, 500)

}

export const checkCardfn = (name, id, defuse, setDefuse, setPageStatus, setCardsList, cardsList, username, score) => {
    if (name === "explode") {
        if (defuse >= 1) {
            setDefuse((prev) => prev - 1)
            removeCardfn(id, cardsList, setCardsList)
        } else {
            onLose(id, cardsList, setCardsList, setPageStatus, username, score)
        }
    } else if (name === "shuffle") {
        revealCardfn(id, cardsList, setCardsList)
        setTimeout(() => {
            const list = GendrateRandomCards()
            setDefuse(0)
            setCardsList(list)
        }, 500)

    } else {
        if (name === "defuse") {
            setDefuse((prev) => prev + 1)
        }
        removeCardfn(id, cardsList, setCardsList)
    }
}


const onWin = (id, cardsList, setCardsList, setScore, setDefuse, username) => {
    revealCardfn(id, cardsList, setCardsList)
    setTimeout(() => {
        setScore((prev) => {
            axios.put(URL + "lastscore", { username, score: prev + 1 })
            axios.put(URL + "finalscore", { username, score: prev + 1 })
            return prev + 1
        })
        const list = GendrateRandomCards()
        setDefuse(0)
        setCardsList(list)
    }, 500)

}

const onLose = (id, cardsList, setCardsList, setPageStatus, username, score) => {
    revealCardfn(id, cardsList, setCardsList)
    setTimeout(async () => {
        await axios.put(URL + "lastscore", { username, score: 0 })
        await axios.put(URL + "finalscore", { username, score })
        setPageStatus("gameover")
    }, 500)
}

export const onclickCard = (id, name, cardsList, setScore, setDefuse, setCardsList, defuse, setPageStatus, username, score) => {
    if (cardsList.length === 1) {
        if (name === "defuse" || name === "cat" || name === "shuffle") {
            onWin(id, cardsList, setCardsList, setScore, setDefuse, username)
        } else {
            if (defuse >= 1) {
                onWin(id, cardsList, setCardsList, setScore, setDefuse, username)
            } else {
                onLose(id, cardsList, setCardsList, setPageStatus, username, score)
            }
        }
    } else {
        checkCardfn(name, id, defuse, setDefuse, setPageStatus, setCardsList, cardsList, username, score)
    }

}