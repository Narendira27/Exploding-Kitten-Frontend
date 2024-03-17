const LeaderboardTableElement = ({ data }) => {
    console.log(data)
    return (
        <di className="flex flex-col justify-center items-center mt-10">
            <table className="w-3/5 ">
                <tr className="w-3/5 bg-slate-100 ">
                    <th className="text-lg p-3 ">Name</th>
                    <th className="text-lg p-3 ">Score</th>
                </tr>
                {
                    data.map((each, key) => <tr className="w-full bg-gray-300 border-b border-bg-neutral-300 border-solid" key={key}>
                        <td className="text-center text-lg p-3  ">{each.name}</td>
                        <td className="text-center text-lg p-3">{each.highestscore}</td>
                    </tr>)
                }

            </table>
        </di>
    )

}

export default LeaderboardTableElement