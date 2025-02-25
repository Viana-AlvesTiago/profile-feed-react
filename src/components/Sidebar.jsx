import styles from './Sidebar.module.css'
import capa from '../assets/capa.jpg'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} alt='Capa do sidebar' />

            <div className={styles.profile}>
                <strong>Tiago Alves</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    Editar Seu perfil
                </a>
            </footer>
        </aside>
    );
}