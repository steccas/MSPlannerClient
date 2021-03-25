var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = { //nativefier -n ProtonMail -a x64 --tray --single-instance --internal-urls "(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(protonmail.com)" beta.protonmail.com
  name: 'Microsoft Planner', // will be inferred if not specified
  targetUrl: 'https://tasks.office.com', // required
  platform: 'windows', // defaults to the current system
  arch: 'x64', // defaults to the current system
  appVersion: '0.1',
  overwrite: true,
  asar: false, // see conceal
  //icon: './icons/icon.ico',
  counter: true,
  bounce: true,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  ignoreCertificate: false,
  disableGpu: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,internalUrls: '(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(tasks.office.com|login|adfs)', // defaults to URLs on same second-level domain as app
  blockExternalUrls: false,
  insecure: false,
  honest: false,
  zoom: 1.0,
  singleInstance: true,
  clearCache: false,
  tray: true,
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
  win32metadata: {
    CompanyName: 'Luca Steccanella',
    FileDescription: 'Microsoft Planner',
    OriginalFilename: 'Microsoft Planner',
    ProductName: 'Microsoft Planner',
    InternalName: 'Luca Steccanella'
  },
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});