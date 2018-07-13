class Api::SongsController < ApplicationController
  def index
    @songs = Artist.find(params[:artist_id]).songs
    render json: @songs
  end

  def show
    @song = Song.find(params[:id])
    render json: @song
  end

  def create
    @artist = Artist.find(params[:artist_id]) 
    @song = @artist.songs.create(song_params)
    # puts params 
    render json: @song
  end

  def update
    @song = Song.find(params[:id])
    @song.update(song_params)
    render json: @song
  end

  def destroy
    @song = Song.find(params[:id]).destroy
    render status: :ok
  end

  private 
  def song_params
  params.require(:song).permit(:title, :album, :preview_url)
  end
end



  