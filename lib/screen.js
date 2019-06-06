console.log('开始');

(async () => {
    console.log('屏幕截图');
    const src = await screen.capture();

    console.log('寻找开始按钮');
    const p = images.findImage(src, tpl.START_MENU);

    console.log(p);
    console.log('点击');
    mouse.click(p.x, p.y);
})();