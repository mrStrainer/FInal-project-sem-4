import React from 'react';
import { View, FlatList, Text } from "react-native";
import ArtistHeader from "./Header";
import Styles from '../../Styles/Artist'
import ShowLoader from '../ShowLoader'
import { Route, Link } from 'react-router-native';
// general info
// top tracks
// albums
// related artists

const TypeMenu = ({ selected = 0, artistId }) => {
    return (
        <View style={Styles.TypeMenu}>
            <Link to={`/artist/${artistId}/`} style={selected === 0? Styles.Selected : Styles.NotSelected}>
                <Text style={Styles.Text}>Top Tracks</Text>
            </Link>
            <Link to={`/artist/${artistId}/albums`} style={selected === 1? Styles.Selected : Styles.NotSelected}>
                <Text style={Styles.Text}>Albums</Text>
            </Link>
            <Link to={`/artist/${artistId}/related`}  style={selected === 2? Styles.Selected : Styles.NotSelected}>
                <Text style={Styles.Text}>Related</Text>
            </Link>
        </View>
    )
}
const typeSelect = [
    {
        path:'/artist/:artistId/',
    },{
        path:'/artist/:artistId/albums',
    },{
        path:'/artist/:artistId/related',
    },
]
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
                    <ArtistHeader {...artist}/>
                    {typeSelect.map((route, index) => <Route exact={true} key={index} path={route.path} render={() => <TypeMenu selected={index} id={this.props.match.params.artistId}/>}/> )}
                    <View style={{flex:1}}> </View>
                </View>       
            )
        } 
        return <Text style={{color:'#ccc'}}>Cant find artist</Text>
    }
}