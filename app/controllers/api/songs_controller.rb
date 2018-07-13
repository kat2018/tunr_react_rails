class Api::SongsController < ApplicationController
  def index
    @songs = Songs.all
    render json: @songs
  end

  def show
    @song = Song.find(params[:id])
    render json: @song
  end

  def create
     @song = Song.create(songs_params)
    render json: @song
  end

  def update
    @song = Song.find(params[:id])
    @song.update(song_params)
    render json: @song
  end

  def delete
  end
end



  # def destroy
  #   @artist = Artist.find(params[:id]).destroy
  #   render status: :ok
  # end

  # private 

  # def artist_params
  # params.require(:artist).permit(:name, :nationality, :photo_url)
  # end