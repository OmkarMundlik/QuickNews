import './App.css';

import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App = ()=> {
  
  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;


    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => {
              setProgress(0);
            }}
            height={2}
          />

          <div style={{marginTop :'80px'}} className="searchbar ms-5 me-5 fixed-top-m-5">
          <span className="badge rounded-pill bg-danger">Search News</span>
          <form className="d-flex flex " >
            <input value={query} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
              setQuery(event.target.value)
            }} />

            <Link  className="btn btn-outline-secondary my-2 my-sm-0" to="/query" >Search</Link>
          </form>
          </div>

          <Routes>
            <Route exact path="/" element={<News apiKey = {apiKey} setProgress={setProgress}  key="general" pageSize={21} country="in" category="general" />} />
            <Route exact path="/business" element={<News apiKey = {apiKey} setProgress={setProgress} key="business" pageSize={21} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey = {apiKey} setProgress={setProgress} key="entertainment" pageSize={21} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey = {apiKey} setProgress={setProgress} key="general" pageSize={21} country="in" category="general" />} />
            <Route exact path="/health" element={<News apiKey = {apiKey} setProgress={setProgress} key="health" pageSize={21} country="in" category="health" />} />
            <Route exact path="/science" element={<News apiKey = {apiKey} setProgress={setProgress} key="science" pageSize={21} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apiKey = {apiKey} setProgress={setProgress} key="sports" pageSize={21} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey = {apiKey} setProgress={setProgress} key="technology" pageSize={21} country="in" category="sports" />} />

            <Route exact path="/technology" element={<News apiKey = {apiKey} setProgress={setProgress} key="technology" pageSize={21} country="in" category="sports" />} />

            <Route exact path="/query" element={<News apiKey = {apiKey} setProgress={setProgress} key="query" pageSize={21} country="in" category="query" query={query} />} />

          </Routes>
        </Router>
      </div>
    )
}

export default App;