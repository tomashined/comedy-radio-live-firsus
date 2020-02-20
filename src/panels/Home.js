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

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<img className="BannerComedyRadio" src={BannerComedyRadio} alt="Persik The Cat"/>
		<a href="https://comedy-radio.ru/" target="_blank">
			<img className="ComedyRadioHomeSiteLogo" src={ComedyRadioHomeSiteLogo} alt="Persik The Cat"/>
		</a>
		<PanelHeader>Comedy Radio Live</PanelHeader>
		
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>

		<video controls="" autoplay="" name="media">
			<source src="http://ic7.101.ru:8000/a202" type="audio/aac">

			</source>
		</video>

		<Group title="Navigation Example">
				<Button size="xl" level="2" href="http://ic7.101.ru:8000/a202" target="_blank">
					<img className="Persik" src={ComedyRadioHomeSiteLogo} alt="Persik The Cat"/>
				</Button>
		</Group>
	</Panel>
);

export default Home;
