import React, { Component } from 'react';
import { axios } from "axios";

class ArtistIndex extends Component {
    state = {
        artists: []
    }
    
    componentDidMount(){
        this.fetchArtists()
    }

    fetchArtists = () =>{
        axios.get('/api/artists')
        .then((responde)=>{
            console.log('ARTIST DATA: ', response.data)
            this.setState({artist: response.data})
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    render() {
        return (
            <div>
                Artist Index
            </div>
        );
    }
}

export default ArtistIndex;