import ButtonElement from "../components/button"
import HeadingElement from '../components/heading'
import DescriptionElement from '../components/description'
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen  flex flex-col justify-center items-center">
            <HeadingElement text={"404 Page Not Found"} styleType={"default"} />
            <DescriptionElement text={"Sorry, We couldn't find the page you're looking for."} styleType={"default"} />
            <ButtonElement onclick={() => navigate('/')} text={"Return to Home"} styleType={"style-2"} />
        </div>
    )
}


export default NotFoundPage