

 const Post = ({post}) => {

    
    return (

        <div className="post">
            <img className="img" src={post.cover} alt={""}></img>
            <div className="texto">

            <h1 className="titulo">{post.title} - {post.id}</h1>
            <p className="paragrafo">{post.body}</p>
            </div>

        
        </div>
        
    )
}
export default Post;