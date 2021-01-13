export const menuData = function () {
    return new Promise((resolove, reject) => {
        let routes = [
            {
                "path": "/",
                "title": "首页",
                "icon": "ios-list-box",
                "children": [],
                "id": 0
            },
            {
                "path": "/game",     //菜单项所对应的路由路径
                "title": "游戏",     //菜单项名称
                "icon": "ios-game-controller-b",
                "children": [
                    {
                        "path": "/game/lol",
                        "title": "LOL",
                        "children": [],
                        "id": 2
                    }
                ],        //是否有子菜单，若没有，则为[]
                "id": 1
            },
            {
                "path": "/sport",
                "title": "体育",
                "icon": "ios-basketball",
                "children": [
                    {
                        "path": "/sport/basketball",
                        "title": "篮球",
                        "children": [],
                        "id": 4
                    }
                ],
                "id": 3
            },
            {
                "path": "/setting",
                "title": "设置",
                "icon": "ios-settings",
                "children": [],
                "id": 5
            }
        ]
        setTimeout(() => {
            resolove(routes)
        })
    })
}