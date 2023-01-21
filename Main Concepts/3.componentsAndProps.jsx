/*
In React, a component is a reusable piece of code that represents a part of a user interface.Components can be thought of as small building blocks that can be used to construct more complex user interfaces.

There are two types of components in React: functional components and class-based components.

Functional components are simple JavaScript functions that return a React element.They do not have their own state or lifecycle methods, and they only receive data via props.

*/
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// Class - based components, on the other hand, are JavaScript classes that extend the React.Component class. They have their own state and lifecycle methods, and they also receive data via props.


class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
/*Props(short for properties) are a way to pass data from a parent component to a child component.They are passed to the child component as an object and can be accessed using the props object inside the component.

For example, you can pass a prop called name from a parent component to a child component like this:
*/

< Welcome name="John" />
//         Extracting components means breaking down a complex component into smaller, simpler, more reusable components.This can make your code more readable, maintainable and testable.This is done by identifying the common patterns in the component and extracting them into their own, smaller components, which can be reused in other parts of the application.

// For example, if you have a complex component that renders a list of items, and each item has a label, a button and an image, you can extract these three elements into their own components - Label, Button, Image.This way, if you need to change the label, you don't need to change the entire component, you just need to change the label component. This minimizes the nested function calls and makes your code more readable and maintainable.


//Splitting components into smaller components, for example :Comment in this dunction
//ClassName is an attribute to which CSS class can be added
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
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

//Extracting Avatar component from the nested component function
function Avatar(props) {
    return (
        <img className="Avatar"
            src={user.avatarUrl}
            alt={user.name}
        />
    );
}
/**
 * The Avatar doesn’t need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.

We recommend naming props from the component’s own point of view rather than the context in which it is being used.
 */


//now we can simplify the comment a little bit
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

//Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
//This lets us simplify Comment even further:

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


/**
 * React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.
 */