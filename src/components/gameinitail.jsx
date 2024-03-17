import InputElement from "../components/input"
import ButtonElement from "../components/button"

const GameInitialElement = ({ onclick, onchange }) => {
    return (

        <div className=" flex flex-col justify-center items-center  h-4/5  w-full">
            <InputElement onchange={(e) => onchange(e.target.value)} />
            <ButtonElement onclick={onclick} text={"Play Now"} styleType={"default"} hover={true} style={"sm:mt-8 sm:w-36 sm:p-2 mt-5"} />
        </div>

    )
}

export default GameInitialElement