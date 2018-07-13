import React, { Component } from 'react';
import axios  from "axios";
import { Link } from "react-router-dom";

class ArtistIndex extends Component {
    state = {
        artists: []
    }
    
    componentDidMount() {
        this.fetchArtists()
    }

    fetchArtists = () => {
        axios.get('/api/artists')
        .then((res) => {
            this.setState({
                artists: res.data
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }
    render() {
        const artistsList = this.state.artists.map((artist) => {
            return (
                <div key={artist.id}>
                    <Link to={`/artists/${artist.id}`} > {artist.name}</Link>
                </div>
            )
        })
        return (
            <div>
                Artist Index {artistsList}
            </div>
        )
    }
}

export default ArtistIndex;