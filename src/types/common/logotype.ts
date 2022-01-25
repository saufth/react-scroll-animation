import { FontSize } from '../style/typography'

/** 
 * Logo properties 
 * 
 * @see {@link FontSize} type for font size values
*/
export interface LogoProps {
    /** Logo size is defined by font size */
    size?: FontSize
    /** Logo mark mode */
    mark?: boolean
}
