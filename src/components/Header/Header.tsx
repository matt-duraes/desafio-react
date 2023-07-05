import styles from './Header.module.css';
import {ImgHTMLAttributes} from 'react';

interface HeaderProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}
export const Header = ( {hasBorder,...props}: HeaderProps) => {
    return (
        <div className={styles.container_header}>
            <img 
                className={styles.img_logo}
                {...props}

            />
            <h1>{hasBorder}</h1>
        </div>
    )
}