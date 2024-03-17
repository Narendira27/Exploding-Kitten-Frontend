export const enableClick = (cardsList, setCardsList) => {
    const modified = cardsList.map((each) => {
        const update = each
        update.disabled = false
        return update
    })
    setCardsList(modified)
}

export const disableClick = (cardsList, setCardsList) => {
    const modified = cardsList.map((each) => {
        const update = each
        update.disabled = true
        return update
    })
    setCardsList(modified)
}