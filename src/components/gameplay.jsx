const GamePlayElement = ({ defuse, score, highestScore, cardsList, onclickCard }) => {
    return (
        <div className="h-4/5 flex flex-col justify-center items-center">
            <div className="flex flex-row sm:mb-5  mb-2 mt-4 justify-center items-center  ">
                <h1 className="mr-4 sm:text-lg text-sm">Defuse: {defuse}</h1>
                <h1 className="mr-4 sm:text-lg text-sm">Score: {score}</h1>
                <h1 className="mr-4 sm:text-lg text-sm">Highest Score: {highestScore}</h1>
            </div>

            <div className=" sm:mt-5 mt-4 w-full flex flex-row justify-center items-center flex-wrap overflow-auto">
                {
                    cardsList.map((each) => <div key={each.id} onClick={each.disabled ? null : () => onclickCard(each.id, each.name)} className=" h-28 w-28  m-1 sm:h-36 sm:w-36 md:h-42 md:w-42  lg:h-60 lg:w-60 sm:m-4  cursor-pointer sm:rounded-2xl rounded-xl  bg-gray-400 hover:bg-zinc-500">
                        {each.reveal ? <h1 className="flex flex-col justify-center items-center sm:text-2xl  md:text-4xl  lg:text-6xl  text-2xl bg-slate-400 sm:rounded-2xl rounded-xl w-full h-full">{each.text}</h1> : null}
                    </div>)
                }
            </div>
        </div>
    )
}

export default GamePlayElement