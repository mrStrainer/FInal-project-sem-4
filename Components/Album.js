import React from 'react';
import { ActivityIndicator, View, TouchableHighlight, Text } from "react-native";
import Track from "./Track";
import AlbumHeader from "./AlbumHeader";
import Placeholder_img from './Resources/album_cover_def.jpg';

export default class Album extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAlbumIfNeeded(this.props.match.params.id)
    }
    render() {
        const { album, isFetching } = this.props.album;
        if (album && !isFetching) {
            return (
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor:'#181818'}}>
                    <AlbumHeader url={album.image.url} name={album.name} artist={album.artist}/>
                    
                    <View style={{flex:1, padding:10, flexDirection: 'column'}}>
                        {album.tracks.map((item, i) => <Track key={item.id} tracknr={item.track_number}  duration={item.duration_ms} name={item.name} last={i === album.tracks.length-1 ? true : false}/>)}
                    </View>
                </View>       
            )
        } 
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
        )
    }
}