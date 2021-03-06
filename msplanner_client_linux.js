var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
  name: 'microsoft-planner', // will be inferred if not specified
  targetUrl: 'https://tasks.office.com', // required
  platform: 'linux', // defaults to the current system
  arch: 'x64', // defaults to the current system
  appVersion: '0.1',
  overwrite: true,
  asar: false, // see conceal
  //icon: './icons/icon.png',
  counter: true,
  bounce: true,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  ignoreCertificate: false,
  disableGpu: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  internalUrls: '(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(tasks.office.com|login|adfs)', // defaults to URLs on same second-level domain as app
  blockExternalUrls: false,
  insecure: false,
  honest: false,
  zoom: 1.0,
  singleInstance: true,
  clearCache: false,
  tray: true,
  inject: './darkscripts/background.js',
  inject: './darkscripts/jquery.min.js',
  inject: './darkscripts/theme_css.js',
  inject: './darkscripts/toggle.js',
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});
