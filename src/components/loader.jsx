import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="h-100 w-100 flex flex-col justify-center items-center">
            <TailSpin color="black" radius={"1px"} strokeWidth={"3px"} height={50} width={50} />
        </div>
    )
}

export default Loader