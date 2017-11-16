import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Search from './Components/Search.jsx';
import ArtistList from './Components/ArtistList.jsx';
import SongsList from './Components/SongsList.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Siren</h1>
        <Navbar />
        <Search />
        <ArtistList />
        <SongsList />
      </div>
    )
  }
}

export default App;