import { Chat } from './chats'
export const CHATS:Chat[]=[
	{
		id: 0,
		title: 'Ethan Gonzalez',
		picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
		lastMessage: {
			id:1,
			content: 'You on your way?',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		id: 1,
		title: 'Bryan Wallace',
		picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
		lastMessage: {
			id:1,
			content: 'Hey, it\'s me',
			createdAt: new Date(2016,8,6)
		}
	},
	{
		id: 2,
		title: 'Avery Stewart',
		picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
		lastMessage: {
			id:1,
			content: 'I should buy a boat',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		id: 3,
		title: 'Katie Peterson',
		picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
		lastMessage: {
			id:1,
			content: 'Look at my mukluks!',
			createdAt: new Date(2016,8,7)
		}
	},
	{
		id: 4,
		title: 'Ray Edwards',
		picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
		lastMessage: {
			id:1,
			content: 'This is wicked good ice cream.',
			createdAt: new Date(2016,8,5)
		}
	}
];
