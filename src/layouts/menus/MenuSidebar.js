export default [{
    name: "Home",
    icon: "fas fa-home",
    to: {
        name: "home",
    },
},
{
    name: "About",
    icon: "fas fa-info",
    to: {
        name: "about",
    },
    subPath: ['user']
},
{
    name: "Forms",
    icon: "fas fa-edit",
    to: {
        name: "form",
    },
},
{
    name: "Table List",
    icon: "fas fa-list",
    to: {
        name: "table",
    },
},
{
    name: "Sub Menu",
    icon: "fas fa-cogs",
    submenu: [{
            name: "Home",
            icon: "fas fa-home",
            to: {
                name: "home",
            },
        },
        {
            name: "About",
            icon: "fas fa-info",
            to: {
                name: "about",
            },
            subPath: ['user']
        },
    ],
},
]