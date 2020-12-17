export const menuData = function () {
    return new Promise((resolove, reject) => {
        let routes = [
            {
                "path": "/game",     //菜单项所对应的路由路径
                "title": "游戏",     //菜单项名称
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
                "children": [],
                "id": 5
            }
        ]
        setTimeout(() => {
            resolove(routes)
        }, 2000)
    })
}