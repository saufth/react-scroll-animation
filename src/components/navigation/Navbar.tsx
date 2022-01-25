import LogoNavbar from '../common/LogoNavbar'
import Nav from './Nav'
import navStyles from '../../styles/components/navigation.module.css'

/**
 * Allows the user to provide navigation at the top of the page
 * 
 * @return Navbar component
 */
const Navbar = (): JSX.Element => {
    return (

        <header className='bg-white fixed top-0 left-0 right-0'>
            <div className={navStyles.navbar}>
                <div className="w-8"></div>
                <LogoNavbar />
                <div className="w-8"></div>
                {/* <Nav /> */}
            </div>
        </header>

    )
}

export default Navbar
