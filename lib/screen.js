console.log('start');
screen.focus(/阴阳师/);
(async () => {
    sleep(3000);
    const src = await screen.capture();
    console.log(src);
    console.log(tpl.ZUDUI_ENTRY);
    const p = images.findImageAndClick(src, tpl.ZUDUI_ENTRY);
    console.log(p);
})();