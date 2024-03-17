import ButtonElement from "../components/button"
import DescriptionElement from "../components/description"
import HeadingElement from "../components/heading"
import LeaderboardTableElement from "../components/leaderboardtable"
import Loader from "../components/loader"
import UseLeaderBoardDetails from "../hooks/LeaderBoardDetails"
import { useNavigate } from 'react-router-dom'


const LeaderBoardPage = () => {
    const LeaderBoardDetails = UseLeaderBoardDetails()
    const navigate = useNavigate()

    return LeaderBoardDetails.isLoading ? <Loader />
        : (<div className="p-5 h-screen w-screen overflow-auto ">
            <HeadingElement text={"Leaderboard"} styleType={"style-2"} style={"sm:text-4xl text-xl"} />
            <DescriptionElement text={"Top Players"} styleType={"style-2"} />
            <LeaderboardTableElement data={LeaderBoardDetails.response.leaderBoard} />
            <div className="flex flex-row justify-center items-center">
                <ButtonElement onclick={() => { navigate('/') }} text={"Back"} hover={"true"} styleType={"default"} style={"sm:p-2 sm:w-32 w-20 sm:rounded-lg"} />
            </div>
        </div>)
}

export default LeaderBoardPage  