import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Intro.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id} centered={true}>
		<PanelHeader>TESTING</PanelHeader>
		{fetchedUser &&
		
		<Div className='User'>
				{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				<h2>Привет, {fetchedUser.first_name}</h2>
						<h3> Игровая индустрия растет стремительными темпами, и миллионы геймеров не простят разработчикам любимой игры, если что-то в ней пойдет не так. В лучшем случае они просто потеряют к ней интерес, а в худшем — сделают ей «антирекламу» среди своих знакомых. </h3>
			</Div>
		}

		<Group title="Navigation Example">
			<Div>
				<Button  mode='commerce' size='xl' onClick={go} data-to="persik">
					Начать тестирование
				</Button>
			</Div>
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
