import { useState, useEffect } from 'react'
import Logo from './Logo'

/**
 * A dynamic Logo component for fixed Navbar, when user scrolls down the page, the logo is replaced
 * by a mark, when user scrolls up, the mark is replaced by the logo with a fade effect 
 * 
 * @return Logo navbar component
 */
const LogoNavbar = (): JSX.Element => {

    const [isMarkMode, setIsMarkMode] = useState<boolean>(false)
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    const handleScroll = () => {
        const position: number = window.pageYOffset
        position > scrollPosition ? setIsMarkMode(true) : setIsMarkMode(false)
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return <Logo mark={isMarkMode} />
}

export default LogoNavbar
