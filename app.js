const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow
    app.commandLine.appendSwitch('ignore-certificate-errors')
    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/Dentistry/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
        if (mainWindow === null) createWindow()
        var authWindow = new BrowserWindow({
            width: 800, 
            height: 600, 
            show: true, 
            'node-integration': false,
            'web-security': false
        });
        // This is just an example url - follow the guide for whatever service you are using
        var authUrl = 'https://SOMEAPI.com/authorize?{client_secret}....'
        
        authWindow.loadURL(authUrl);
        authWindow.show();
        // 'will-navigate' is an event emitted when the window.location changes
        // newUrl should contain the tokens you need
        authWindow.webContents.on('will-navigate', function (event, newUrl) {
            console.log(newUrl);
            // More complex code to handle tokens goes here
        });
        
        authWindow.on('closed', function() {
            authWindow = null;
        });
    })