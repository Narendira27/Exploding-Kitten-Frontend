import { uid } from "uid"

const GendrateRandomCards = () => {

    // 😼 - cat , defuse -  🙅‍♂️ , shuffle - 🔀 , exploding kitten - 💣

    let TempArr = []

    const CardItems = [{
        "name": "cat",
        "text": "😼",
        "reveal": false,
        "disabled": false
    }, {
        "name": "defuse",
        "text": "🙅‍♂️",
        "reveal": false,
        "disabled": false

    }, {

        "name": "shuffle",
        "text": "🔀",
        "reveal": false,
        "disabled": false

    },
    {
        "name": "explode",
        "text": "💣",
        "reveal": false,
        "disabled": false
    }
    ]

    for (let i = 0; i < 5; i++) {
        const RandomNum = Math.ceil(Math.random() * CardItems.length)
        const Item = CardItems[RandomNum - 1]
        TempArr.push(Item)
    }


    const ShuffledArr = TempArr.map((obj) => ({ ...obj, id: uid() }))
    console.log(ShuffledArr)
    return ShuffledArr
}

export default GendrateRandomCards