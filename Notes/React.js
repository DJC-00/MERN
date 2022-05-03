// With React, we can make a basic component using React.createElement. React.createElement has three main parameters. First, we need to tell React what kind of element we want to create, let's say an h1 tag. Next, we can pass in props. We will explore this concept in more depth later, but for the time being let's just pass in an empty object, via {}. Lastly, we will tell React.createElement the children we want to include. That is, we need to tell React the items we want within our h1 tag. This could be a string, such as "I am creating my first React component". Or, we could nest another component via another React.createElement function call. An example would be as follows:

// create myReactComponent, type of element, props, component children
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component");
// nested example where the child is another react component
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"));

// ╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩ [_JSX_] ╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩╤╩

//// Raw Javascript
const App = () => {
    // Here we simply created a function that returns a new React element
    return React.createElement("h1", {}, "Our First React page has rendered");
}
/* 
*  SIDE NOTE:
*  Because the function above returns 1 thing, we can re-write this function in 1 line:
*  const App = () => React.createElement("h1", {}, "Our First React page has rendered");
*/
// Then we call the function that returns the element that we intend to render.
ReactDOM.render(App(), document.getElementById("root"));
// Though, take a mental note on how we are firing the App function just like any other function

//// Babel Transpiler
// Notice the HTML syntax here. Although this may look like regular HTML, it's actually not. 
ReactDOM.render( <h1> Hello! </h1>, document.getElementById("root"));

// **Here is what the Babel translation looks like**
ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

//// JSX
// *Must start with capital letter*
const JsxApp = () => <h1>Our First React page has rendered</h1>;
// Notice The difference in syntax. Here we've created a React Functional Component, 
// named JsxApp which looks like regular HTML syntax
ReactDOM.render(<JsxApp></JsxApp>, document.getElementById("root"));
// Instead of the traditional way we are familiar with firing a function - JsxApp() -
// we wrap our function name in an HTML tag instead - <JsxApp /> -

// The way you know the difference between a normal HTML element vs a React Component is the first letter in our 
// component name is uppercase. Note: React treats lowercase letters as DOM tags. I.E: if our App function name 
// started with lowercase (i.e: const app=()=> {...}), React would assume that you are trying to use a native html 
// tag named app but, because app is not a valid html tag, it will throw the following error:


// Lets look at a normal HTML input tag that is self closed. 

<>
{/* Lets look at a normal HTML input tag that is self closed.  */}
<input />
{/* With JSX, we can do the same thing. So, because our <App></App> tag doesn't wrap anything, we can self close it.  */}
<script type="text/babel">
    ReactDOM.render(<App />, document.getElementById('root'));
</script>
</>

// We can either place the above elements inside of a single tag like <div> or if we don't want to introduce additional 
// elements into the DOM, we are able to make use of a JSX fragment as the error message above alludes to.

class App extends Component {    
    render(){        
        return (            
            <>                
                <h1>Hello World</h1>                
                <p>This is a paragraph</p>            
            </>        
        );    
    }
}

// When using the HTML class, we will need to instead use the className attribute in JSX.

class App extends Component {    
    render() {        
        return (            
            <h1 className="my-class">This is JSX</h1>        
        );    
    }
}

// If we were to rewrite this into JSX, how should it know to handle the
// for on line 3 as the HTML version of for and not as a JavaScript for?

class App extends Component {    
    render() {        
        return (            
            <form action="/process" method="post">                
                <div class="form-group">                    
                    <label htmlFor="email">Email:</label>                    
                    <input type="text" id="email" name="username" class="form-control" />                
                <div>            
            </form>        
        );    
    }
}