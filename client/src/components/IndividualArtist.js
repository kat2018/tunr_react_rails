import React, { Component } from 'react';
import { axios } from "axios";

class IndividualArtist extends Component {
    state = {
        artist: {},
        songs: []
    }

    componentDidMount(){
        this.fetchArtistAndSong()
    }

    fetchArtistAndSongs = () => {
        console.log(this.props.match.params.id)
        axios.get(`/api/artists/${artistId}`)
        .then(response => {
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                IndividualArtist
            </div>
        );
    }
}

export default IndividualArtist;