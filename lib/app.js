console.log('展示API：', opt.USE_API);

if (opt.USE_API === '显示版本') {

    console.log('无效的版本号', app.versionCode);

    console.log('Electron版本号', app.versionName);

    console.log('无效的版本号', app.autojs.versionCode);

    console.log('Scriptron版本号', app.autojs.versionName);

}

if (opt.USE_API === '打开文件') {

    if (opt.OPEN_TYPE) {

        app.editFile('test.txt');

    } else {

        app.viewFile('test.txt');

    }

}


if (opt.USE_API === '打开URL') {

    app.openUrl(opt.OPEN_URL);

}


if (opt.USE_API === '解析URL') {

    console.log(app.parseUri(opt.PARSE_URI));

}


if (opt.USE_API === '发送邮件') {

    app.sendEmail({ email: opt.SEND_EMAIL });

}


if (opt.USE_API === '转换文件路径') {

    console.log('源路径：', opt.PARSE_PATH);

    console.log('转换后：', app.getUriForFile(opt.PARSE_PATH))

}