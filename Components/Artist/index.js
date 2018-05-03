import React from 'react';
import { ActivityIndicator, View, FlatList, Text } from "react-native";
import Track from "../Track";
//import AlbumHeader from "./AlbumHeader";
import Placeholder_img from '../Resources/album_cover_def.jpg';
import Styles from '../../Styles/Artist'
import ShowLoader from '../ShowLoader'

export default class artist extends React.Component {
    componentDidMount() {
        this.props.fetchArtistIfNeeded(this.props.match.params.artistId)
    }
    // ListHeaderComponent={<artistHeader url={artist.image.url} name={artist.name} artist={artist.artist}/>}

    // <FlatList 
    //     style={Styles.artistTracks}
    //     data={artist.tracks}
    //     ListFooterComponent={<ShowLoader isFetching={isFetching}/>}
    //     keyExtractor={(item,i) => `${i}-${item.id}`}
    //     renderItem={({item}, i) => <Track tracknr={item.track_number} duration={item.duration_ms} name={item.name} last={i === artist.tracks.length-1 ? true : false}/>}
    // />
    render() {
        const { artist, isFetching } = this.props.artist;
        if (artist && !isFetching) {
            return (
                <View style={Styles.artistContainer}>
                    <Text style={{color:'#ccc'}}>{artist.name}</Text>
                </View>       
            )
        } 
        return <Text style={{color:'#ccc'}}>Cant find artist</Text>
    }
}