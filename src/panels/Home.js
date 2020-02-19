import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Comedy Radio Live</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>

		<Group title="Navigation Example">
		<div class="vkframe__player">
 <div class="marquee">
 <div class="TitleSongAir" data-prefixchannel="comedy-radio.ru" data-idstation="1" data-sourse="server">
 </div>
 <div class="marquee__wrapper">
 <span class="marquee__artist TitleExecutorAir">Sofi Tukker</span>
 <span class="marquee__delimeter TitleSongAirSeparator" style="">—</span>
 <span class="marquee__track TitleTracksAir">Feeling Good</span>
 </div>
 </div>
 
  <div class="player ">
 <div class="player__play">
 <a href="#" class="icon icon-control icon-play player__play-icon toggleplayer play " data-player="player_vkframe_1">
 </a>
        
 <audio data-outreach="true" id="player_vkframe_1" data-playlist="https://stl.101.ru/api/channel/getServers/202/channel/acc/64" data-progress="false" preload="none" data-type="audio/aac">
 </audio>
  </div>
 
  
  
  <div class="volume">
 <i class="icon icon-control icon-volume icon-volume-full volume__icon"></i>
 <div class="volume__bar">
 <div class="volume__btn" style="left: 44px;"></div>
 <div class="volume__fill" style="width: 43.8666%;"></div>
 </div>
 </div>
  
 <script>
  
  </script>
 </div>
 </div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
