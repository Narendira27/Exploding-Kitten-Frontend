const ButtonElement = ({ onclick, text, hover, style, styleType }) => {

    const defaultstyle = "bg-zinc-900 text-white sm:text-xl text-lg  sm:p-5 p-2  sm:rounded-2xl rounded-lg sm:mt-12 mt-4 border border-black border-solid"
    const hoverstyle = "hover:border-stone-500 hover:border-solid hover:border hover:bg-white hover:text-black"

    const style2 = "sm:text-xl text-lg  sm:p-5 p-2  sm:rounded-2xl rounded-lg sm:mt-12 mt-4 border-stone-500 border-solid border bg-white text-black"

    let finalstyle = ""

    if (styleType === "default") {
        finalstyle = defaultstyle
        if (hover) {
            finalstyle += hoverstyle
        }
    } else if (styleType === "style-2") {
        finalstyle = style2
    }

    return (<button onClick={onclick} className={` ${finalstyle} ${style} `} >{text}</button>)
}

export default ButtonElement