import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import capa from '../assets/capa.jpg'
import profilepic from '../assets/tiago.jpeg'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} alt='Capa do sidebar' />

            <div className={styles.profile}>
                
                <img className={styles.avatar} src={profilepic} alt='Profile picture' />

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