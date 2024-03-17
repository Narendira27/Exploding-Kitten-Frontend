import DescriptionElement from "../components/description"
import HeadingElement from "../components/heading"
import NavBar from "../components/navbar"
import ButtonElement from "../components/button"


import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen bg-white">
            < NavBar />
            <div className="h-4/5  w-full flex flex-col justify-center items-center ">
                <HeadingElement text={"Play Exploding Kitten"} styleType={"default"} />
                <DescriptionElement text={"Online Single Player Card Game. Easy to Learn. Fun to Play."} styleType={"default"} />
                <ButtonElement onclick={() => { navigate('/play') }} text={"Play Now"} styleType={"default"} hover={true} />
            </div>
        </div >
    )
}

export default HomePage