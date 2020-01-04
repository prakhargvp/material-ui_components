const topics = [
	{
		id: 1,
		name: "Menu 1",
		order: 1,
		slug: "menu-1",
		children: [
		{ 
			id: 2, name: "sub menu 1 1", slug: "sub-menu1-1", order: 2,
			children: [
				{ id: 9, name: "sub menu 121 ", slug: "sub-menu1-2-1", order: 3 },
				{ id: 10, name: "sub menu 123 ", slug: "sub-menu1-2-3", order: 1 }
			]
		},
		{ id: 3, name: "sub menu 1 2", slug: "sub-menu1-2", order: 3 },
		{ id: 4, name: "sub menu 1 3", slug: "sub-menu1-3", order: 1 }
		]
	},
	{
		id: 5,
		name: "Menu 2",
		order: 2,
		slug: "menu-2",
		children: [
		{ id: 6, name: "sub menu 2 1", slug: "sub-menu2-1", order: 2 },
		{ id: 7, name: "sub menu 2 2", slug: "sub-menu2-2", order: 3 },
		{ id: 8, name: "sub menu 2 3", slug: "sub-menu2-3", order: 1 }
		]
	}
];

export { topics };