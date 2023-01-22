//Given Component of comment is 
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
//firstly extracting avatar and simplifying the function 
function Avatar(props) {
    return (

        < img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}