export function Post(props){
    return(
        <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
        </div>
    )
}
Post.propTypes = {
    author: String,
    content: String,
}


