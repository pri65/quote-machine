function App() {

    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuote] = React.useState("");

     React.useEffect(() => {
       async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();

        setQuotes(data);
        let ranIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[ranIndex])
       }
       fetchData();
     },[])

     const getNewQuote =() => {
        let ranIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[ranIndex])
     }

    return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className='card-header'>Inspirational Quotes</div>
                    <div className='card-body'>
                        {randomQuote ? (
                            <>
                            <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="row">
                            <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                            <a href="" className="btn btn-warning"></a>
                            <a href="" className="btn btn-danger"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))