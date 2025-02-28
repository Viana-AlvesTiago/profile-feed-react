import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt, content }){

    const publisedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}  />  
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisedDateFormatted} dateTime='2025-02-25 08:13:00'>{publisedDateFormatted}</time>
            </header>
            <div className={styles.content}>
                {content.map(iten => {
                    if (iten.type === 'paragraph'){
                        return <p>{iten.content}</p>;
                    }else if(iten.type === 'link'){
                        return <p><a>{iten.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}