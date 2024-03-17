import HeadingElement from "./heading"
import ButtonElement from "./button"

const GameOverElement = ({ onclick }) => {
    return (
        <div className="flex flex-col justify-center items-center sm:mt-10 h-4/5 w-full">
            <HeadingElement text={"Game Over"} styleType={"default"} />
            <ButtonElement onclick={onclick} text={"Play Again"} styleType={"default"} style={"sm:p-4 sm:mt-10 sm:text-2xl text-sm "} />
        </div>)
}

export default GameOverElement