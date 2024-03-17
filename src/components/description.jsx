const DescriptionElement = ({ text, styleType, style }) => {

    let finalStyle

    const defaultStyle = "sm:text-5xl sm:mt-14 mt-4 text-lg text-center "
    const style2 = "sm:text-lg sm:mt-4 mt-2 text-md text-center"

    if (styleType === "default") {
        finalStyle = defaultStyle
    } else if (styleType === "style-2") {
        finalStyle = style2
    }

    return (
        <>
            <p className={`${finalStyle} ${style}`}>{text}</p>
        </>
    )
}

export default DescriptionElement