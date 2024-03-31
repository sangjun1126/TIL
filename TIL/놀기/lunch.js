function changeMenu() {
    const menuItems = ['피자', '햄버거', '샐러드', '스테이크', '짜장면'];
    const randomIndex = ~~(Math.random() * menuItems.length);
    const newMenu = prompt("새로운 메뉴를 입력해주세요");

    if (newMenu !== null && newMenu.trim !== "") {
        menuItems[randomIndex] = newMenu.trim();
        updateMenu(menuItems);
    }
}

function updateMenu(menuItems) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = "";
    menuItems.forEach(menu => {
        const li = document.createElement("li");
        li.textContent = menu;
        menuList.appendChild(li);
    })
}