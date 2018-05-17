import React from 'react';
import { ActivityIndicator, View, FlatList, Text } from "react-native";
import Track from "../Track";
import AlbumHeader from "./AlbumHeader";
import Placeholder_img from '../Resources/album_cover_def.jpg';
import Styles from '../../Styles/Album'
import ShowLoader from '../ShowLoader'
import withResults from '../withResultsHOC'
import withSpinner from '../withSpinnerHOC'

const AlbumResult = ({ album, highlight }) => {
    return ( 
        <FlatList 
            style={Styles.albumTracks}
            data={album.tracks}
            ListHeaderComponent={<AlbumHeader url={album.image.url} name={album.name} artist={album.artist}/>}
            keyExtractor={(item,i) => `${i}-${item.id}`}
            renderItem={({item}, i) => <Track tracknr={item.track_number} highlight={highlight === item.id} duration={item.duration_ms} name={item.name}/>}
        />
    )
} 
const AlbumWithResults = withResults(AlbumResult);
const AlbumWithResultsAndSPinner = withSpinner(AlbumWithResults);

export default class Album extends React.Component {
    componentDidMount() {
        this.props.fetchAlbumIfNeeded(this.props.match.params.albumId)
    }
    render() {
        const { album, isFetching } = this.props.album;
        return (
            <View style={Styles.albumContainer}>
                <AlbumWithResultsAndSPinner results={this.props.album.album} message={'No album'} {...this.props.album} highlight={this.props.location.search.slice(11,33)}/>
            </View>       
        )
    }
}