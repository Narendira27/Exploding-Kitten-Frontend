import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className='w-full flex flex-row items-center justify-between sm:pl-5 p-3 sm:pr-5 sm:pb-5 sm:pt-5 border-solid border-slate-300 border-b'>
            <Link to="/" ><h1 className='sm:text-xl  text-lg font-semibold'>Exploding Kitten</h1></Link>
            <div className='flex flex-row items-center'>
                <Link to="/play"><p className='sm:mr-5 mr-3 text-md sm:text-lg'>Play</p></Link>
                <Link to="/leaderboard"><p className=' text-md sm:text-lg'>LeaderBoard</p></Link>
            </div>
        </nav>
    )
}

export default NavBar