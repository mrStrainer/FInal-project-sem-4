import React from 'react';
import { ActivityIndicator, View, FlatList, Text } from "react-native";
import Track from "../Track";
import AlbumHeader from "./AlbumHeader";
import Placeholder_img from '../Resources/album_cover_def.jpg';
import Styles from '../../Styles/Album'
import ShowLoader from '../ShowLoader'

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
                <View style={Styles.albumContainer}>
                    <FlatList 
                        style={Styles.albumTracks}
                        data={album.tracks}
                        ListHeaderComponent={<AlbumHeader url={album.image.url} name={album.name} artist={album.artist}/>}
                        ListFooterComponent={<ShowLoader isFetching={isFetching}/>}
                        keyExtractor={(item,i) => `${i}-${item.id}`}
                        renderItem={({item}, i) => <Track tracknr={item.track_number} duration={item.duration_ms} name={item.name} last={i === album.tracks.length-1 ? true : false}/>}
                    />
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