import styles from './Comment.module.css'
import profilepic from '../assets/tiago.jpeg'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={profilepic} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tiago Alves</strong>
                            <time title='25 de Fevereiro ás 08:13' dateTime='2025-02-25 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}