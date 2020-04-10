import React, { Component } from "react";
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Details from "./Details";
const KEY = "AIzaSyBseWKhYPoOpRVoODtWoYBSvSUk_VOrjsU";
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLV7_SDtanVwgaQ0ReDzE16NlkkbmVGeiw&key=${KEY}`;

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videodata: []
    };
  }
  componentDidMount() {
    document.title = "Videos";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            videodata: result.items
          })
          console.log(this.state.videodata);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, videodata } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Videos</h1>     
            <div class="row">
                  {videodata.map(item => (
                    <div class="col-lg-11" key={item.snippet.resourceId.videoId} >
                      <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}><img src={item.snippet.thumbnails.maxres.url} class="zoom img-fluid "/></a>
                    </div>
                  ))}      
              <Switch>
                <Route path="/Details" component={Details}/>
              </Switch>
            </div>
            
          
        </div>
      );	
    }
  }
}
export default Recent;