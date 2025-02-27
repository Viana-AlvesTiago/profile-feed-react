/* eslint-disable react/prop-types */
import styles from './Avatar.module.css';
import defaultProfilePic from '../assets/tiago.jpeg'

export function Avatar({hasBorder = true, src = defaultProfilePic}){
    return(
        // eslint-disable-next-line react/prop-types
        <img className={ hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}  />
    );
}