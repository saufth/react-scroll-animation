import type { LogoProps } from '../../types/common/logotype'
import logoStyles from '../../styles/common/Logo.module.css'
import fxStyles from '../../styles/fx.module.css'

/**
 * A brand name styled as a logo
 * 
 * @see {@link LogoProps} interface for the input data structure
 * 
 * @param size - Logo font size
 * @param mark - Logo mark mode
 * @return Logo component
 */
const Logo = ({ size, mark }: LogoProps): JSX.Element => {
    
    // Styles
    const logoStyle: string = `font-mono text-3xl`
    const logoMarkPart1Style: string = mark ? fxStyles.fade : logoStyles.logoMarkPart1
    const logoMarkPart2Style: string = mark ? fxStyles.fade : logoStyles.logoMarkPart2

    return (
        <span className={logoStyle}>
            <span className="text-gray-500">
                s<div className={`${logoStyles.logoMark} ${logoMarkPart1Style}`}>auft</div>
            </span>
            <span className="text-green-500">
                w<div className={`${logoStyles.logoMark} ${logoMarkPart2Style}`}>are</div>:
            </span>
        </span>
    )
}

export default Logo
