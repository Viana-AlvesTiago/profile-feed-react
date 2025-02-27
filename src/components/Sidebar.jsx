import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import capa from '../assets/capa.jpg'
import profilepic from '../assets/tiago.jpeg'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} alt='Capa do sidebar' />

            <div className={styles.profile}>
                
                <Avatar src={profilepic} />


                <strong>Tiago Alves</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar Seu perfil
                </a>
            </footer>
        </aside>
    );
}