// Navigation/Navigation.js

import React from 'react'; // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';
import Test from '../Components/Test';

const SearchStackNavigator = createStackNavigator({
	Search: {
		screen: Search,
		navigationOptions: {
			title: 'Rechercher',
		},
	},
	FilmDetail: {
		screen: FilmDetail,
	},
});

const FavoritesStackNavigator = createStackNavigator({
	Favorites: {
		screen: Test,
		navigationOptions: {
			title: 'Favoris',
		},
	},
	FilmDetail: {
		screen: FilmDetail,
	},
});

const MoviesTabNavigator = createBottomTabNavigator(
	{
		Search: {
			screen: SearchStackNavigator,
			navigationOptions: {
				tabBarIcon: () => {
					return <Image source={require('../Images/ic_search.png')} style={styles.icon} />;
				},
			},
		},
		Favorites: {
			screen: FavoritesStackNavigator,
			navigationOptions: {
				tabBarIcon: () => {
					return <Image source={require('../Images/ic_favorite.png')} style={styles.icon} />;
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeBackgroundColor: '#DDDDDD',
			inactiveBackgroundColor: '#FFFFFF',
			showLabel: false,
			showIcon: true,
		},
	}
);

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
	},
});

export default createAppContainer(MoviesTabNavigator);
