const InputElement = ({ onchange }) => {
    return (
        <>
            <input onChange={(e) => onchange(e)} className="border border-solid border-gray-400 outline-none p-3  rounded-lg text-xl" type="text" placeholder="Name" />
        </>
    )
}

export default InputElement 