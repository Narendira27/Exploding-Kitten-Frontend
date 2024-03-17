const HeadingElement = ({ text, styleType, style }) => {

    let finalStyle = ""
    const defaultstyle = "text-slate-900 text-center text-xl font-bold sm:text-7xl"
    const style2 = "text-slate-900 text-center text-lg font-bold sm:text-xl"

    if (styleType === "default") {
        finalStyle = defaultstyle
    } else if (styleType === "style-2") {
        finalStyle = style2
    }

    return (
        <>
            <h1 className={`${finalStyle} ${style}`}>{text}</h1>
        </>
    )
}


export default HeadingElement