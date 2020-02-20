import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import ComedyRadioHomeSiteLogo from '../img/ComedyRadioHomeSiteLogo.svg';
import BannerComedyRadio from '../img/BannerComedyRadio.jpg';
import './Home.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Comedy Radio Live</PanelHeader>
		<a href="https://comedy-radio.ru/" target="_blank">
			<img class="BannerComedyRadio" src={BannerComedyRadio}/>
		</a>
		
		<audio class='AudioPleer' controls="true" autoplay="true">
			<source src="https://pub0101.101.ru:443/stream/air/aac/64/202" type="audio/aac"></source>
		</audio>


	</Panel>
);

export default Home;
