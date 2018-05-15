import React from 'react';
import { View, FlatList, Text } from "react-native";
import ArtistHeader from "./Header";
import Styles from '../../Styles/Artist'
import ShowLoader from '../ShowLoader'
import { Route, Link } from 'react-router-native';
import ArtistResults from './ArtistResults'
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
        type:'TopTracks'
    },{
        path:'/artist/:artistId/albums',
        type:'ArtistAlbums'
    },{
        path:'/artist/:artistId/related',
        type:'RelatedArtists'
    },
]
export default class artist extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId)
    }
    render() {
        const { artist, isFetching } = this.props.artist;
        if (artist && !isFetching) {
            return (
                <View style={Styles.artistContainer}>
                    <ArtistHeader {...artist}/>
                    {typeSelect.map((route, index) => <Route exact={true} key={index} path={route.path} render={() => <TypeMenu selected={index} id={this.props.match.params.artistId}/>}/> )}
                    <View style={{flex:1}}> 
                        {typeSelect.map((route, index) => <Route exact={true} key={`${index}-list`} path={route.path} render={
                            () => 
                                <ArtistResults type={route.type}  {...this.props.artist}/>
                            }/> 
                        )}
                    </View>
                </View>       
            )
        } 
        return <Text style={{color:'#ccc'}}>Cant find artist</Text>
    }
}