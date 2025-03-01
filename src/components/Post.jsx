/* eslint-disable react/prop-types */

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'




export function Post({ author, publishedAt, content }){

    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState(""); 
 
    const publisedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }
  


    function hadleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
        
    }

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
                        return <p key={iten.content}>{iten.content}</p>;
                    }else if(iten.type === 'link'){
                        return <p key={iten.content}><a>{iten.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={hadleCreateNewComment} className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>
                <textarea name='comment' placeholder='Deixe um comentário' value={newCommentText} onChange={handleNewCommentChange} />
                <footer>
                <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}