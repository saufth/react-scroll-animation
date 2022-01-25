import navStyles from '../../styles/components/navigation.module.css'

/**
 * Set of major block of navigation links
 * 
 * @return Nav component
 */
const Nav = (): JSX.Element => {

    // Define the navigation list items
    const navData: string[] = [
        'Home',
        'Profile',
        'Projects',
        'Contact'
    ]

    // Mapping navigation list items from navigation data
    const navItems: JSX.Element[] = navData.map(( value: string, index: number ): JSX.Element => (
        <li key={index}>
            <a href="#" className={navStyles.navLink}>
                { value }
            </a>
        </li>
    ))

    return (
        <div>
            <nav className={navStyles.nav}>
                <ul className={navStyles.navList}>
                    { navItems }
                </ul>
            </nav>
        </div>
    )

}

export default Nav
