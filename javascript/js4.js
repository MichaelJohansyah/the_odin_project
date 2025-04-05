let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof key === "number") {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

alert(menu.height);
alert(menu.width);
alert(menu.title);
