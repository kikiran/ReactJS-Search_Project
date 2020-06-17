import React from 'react';
import SearchBar from './components/searchbar/SearchBar';
import axios from 'axios';
import ImageList from './components/imagelist/ImageList';
class App extends React.Component {

    state = {
        images: []
    }
    
     onSearchSubmit = async term => {
        const response =  await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID zmpiBmqoHH5265J1vtO6M0UGWcQpNPLO6AXOZ3Xtb_o'
            }

        })

        this.setState({ images: response.data.results })
    }


    render() { 
        return ( 
            <div className="ui container" style={{paddingTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images = {this.state.images}  />
            </div>
         );
    }
}
 
export default App;