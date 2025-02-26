import styles from './Post.module.css'
import avatar from '../assets/tiago.jpeg'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={avatar} alt='Avatar' />
                    <div className={styles.authorInfo}>
                        <strong>Tiago Alves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='25 de Fevereiro ás 08:13' dateTime='2025-02-25 08:13:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portif. É um porjeto que fiz no NLW Return, evendo</p>
                <p><a href='#'>tiago.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto</a>{' '}<a href='#'>#nlw</a></p>

            </div>
        </article>
    )
}