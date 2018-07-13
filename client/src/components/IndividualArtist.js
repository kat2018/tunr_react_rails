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

    fetchArtistAndSongs = async () => {
        const artistId = this.props.match.params.id

        try{
            let artist = await axios.get(`/api/artists/${artistId}`)
            let songs = await axios.get(`/api/artists/${artistId}/songs`)
            this.setState({
                artist: artist.data,
                songs: songs.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const songsList = this.state.songs.map((song) => {
            return (
                <div>
                    <h4> {song.title}</h4>
                    <audio controls src={song.preview_url}/>
                </div>
            )
        })
        return <div>
            <h1> {this.state.artist.name} </h1>
            <h4> {this.state.artist.nationality} </h4>
            <img width={200} src="{this.state.artist.photo_url}" alt="{this.state.artist.name}" />
            {songsList}
          </div>;
    }
}

export default IndividualArtist;