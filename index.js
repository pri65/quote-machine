function App() {

    const [quotes,setQuotes] = React.useState([]);
    const [randomQuotes,setRandomQuotes] = React.useState([]);

     React.useEffect(() => {
       async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();

        setQuotes(data);
        let ranIndex = Math.floor(Math.random() * data.length);
        setRandomQuotes(data[ranIndex])
       }
       fetchData();
     },[])

    return (
        <div className="container pt-5">
            
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))