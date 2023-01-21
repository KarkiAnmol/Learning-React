/*Embedding Expressions in JSX*/
const user = {
    firstName: 'Anmol',
    lastName: 'Karki'
};
const details = {
    age: 21
};
function formatName(x) {
    return x.firstName + ' ' + x.lastName;
}
//Here we have embedded the result of javascript calling function ,formatName(user),into an <h1> element.
const element = (
    <h1>
        Hello, {formatName(user)}.Are you {details.age} years old?
    </h1>
);

/*JSX is an Expression too*/
//
function greet(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!!</h1>
    }
    else
        return <h1>Hello,Stranger!</h1>
}

//specifying attributes
const linkElement = <a href="https://www.facebook.com">link</a>
const imgElement = <img src={user.avatarUrl} alt="User Image" />;




/*Specifying Children with JSX*/


//consider the following JSX element
<MyComponent>
    <p>This is a child of MyComponent</p>
    <p>So is this</p>
</MyComponent>
//In this example, the two <p> elements are the children of the <MyComponent> element. These children can be accessed and rendered within the MyComponent component using props.children like this:
function MyComponent(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
//It's also worth noting that you can use the spread operator {...props.children} to render all the children at once, or you can use Array.prototype.map method to map over the children and render them individually.




/*JSX prevents Injection Attacks*/


//By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

const title = response.potentiallyMaliciousInput;
// This is safe:
const element1 = <h1>{title}</h1>;
/*
JSX prevents injection attacks by automatically escaping any special characters within a JSX element's children. This means that if a user tries to inject malicious code, such as JavaScript or HTML, into the component's props or state, the JSX transpiler will automatically convert any special characters, such as < and >, into their corresponding HTML entities, making them safe to render.

For example, consider the following code:

const userInput = '<script>alert("Injection Attack")</script>';
const element = <p>{userInput}</p>;

In this example, if the userInput variable contained a string of malicious code, the JSX transpiler would automatically convert the < and > characters into &lt; and &gt;, respectively. This would prevent the code from being executed, and instead it would be treated as plain text.

Additionally, React provides a way to use string literals in JSX, which is called dangerouslySetInnerHTML this method allows you to set an HTML string as the content of a JSX element, but it should be used with caution and only when it is absolutely necessary.

It's important to note that, even though JSX provides some level of protection against injection attacks, it's still a good practice to validate and sanitize any user input before it's used in the application. */



/*Simplified version of the structure of a React Element*/
const element2 = {
    type: h1,
    props: {
        className: 'greeting',
        children: 'Hello World'
    }
};
//The type property represents the HTML element, in this case, an h1 element. The props property holds the properties and children of the element, such as the className and the content of the element, in this case 'Hello, world!'