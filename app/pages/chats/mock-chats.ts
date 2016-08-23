import { Chat } from './chats'
export const CHATS:Chat[]=[
	{
		title: 'Ethan Gonzalez',
		picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
		lastMessage: {
			content: 'You on your way?',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		title: 'Bryan Wallace',
		picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
		lastMessage: {
			content: 'Hey, it\'s me',
			createdAt: new Date(2016,8,6)
		}
	},
	{
		title: 'Avery Stewart',
		picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
		lastMessage: {
			content: 'I should buy a boat',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		title: 'Katie Peterson',
		picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
		lastMessage: {
			content: 'Look at my mukluks!',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		title: 'Ray Edwards',
		picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
		lastMessage: {
			content: 'This is wicked good ice cream.',
			createdAt: new Date(2016,8,5)
		}
	}
];
