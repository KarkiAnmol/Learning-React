/*
Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
*/
//const element= <h1>Hello,World</h1> //React elements are plain objects


//Rendering an element into the DOM
//To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

//code:
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );
// const element = <h1>Hello,World</h1>
// root.render(element);

//updating the Rendered Element
/*React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render().

*/
const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = function (tick) {
    const element = (
        <div>
            <h1>
                Hello,World

            </h1>
            <h2>It is {new Date().toLocalTimeString()}</h2>
        </div>
    )
    root.render(element);
}
setInterval(tick, 1000);

//Since React only updates what is necessary the content inside h1 wont change every 1 second,neither will "It is "from <h2> only the time stamp will change every 1 second
