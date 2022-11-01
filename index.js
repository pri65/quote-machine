function App() {

    const [quotes,setQuotes] = React.useState([]);
    const [randomQuotes,setRandomQuotes] = React.useState([]);

     React.useEffect(() => {
       async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
       }
     },[])

    return (
        <div>Hello World</div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))