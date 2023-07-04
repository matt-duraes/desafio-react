import styles from './Header.module.css';
import {ImgHTMLAttributes} from 'react';

interface Header extends ImgHTMLAttributes<HTMLImageElement>{

}
export const Header = ( {...props}) => {
    return (
        <div className={styles.container_header}>
            <img 
                className={styles.img_logo}
                {...props}
            />
        </div>
    )
}