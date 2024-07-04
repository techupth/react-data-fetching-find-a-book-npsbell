import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [findBook, setFindBook] = useState([])
  const [searchBook, setSearchBook] = useState("")

  useEffect(() => {
    if(searchBook){
      getFindBook(searchBook)
    }
  }, [searchBook])

  const getFindBook = async (item) => {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${item}`)
    setFindBook(result.data.items)
  }

  const handleSearchBook = (event) => {
    setSearchBook(event.target.value)
  }

  return (
  <div className="App">
    {/* start coding here */}
    <label htmlFor="search-book"><h1>Find a Book</h1></label>
    <input type="text" id="search-book" onClick={handleSearchBook}/>
    {findBook.length > 0 && (
      <>
        {findBook.map((item, index) => (
          <div key={index}>
            <li className="search-result">{item.volumeInfo.title}</li>
          </div>
        ))}
      </>
    )}
  </div>
);
}

export default App;
