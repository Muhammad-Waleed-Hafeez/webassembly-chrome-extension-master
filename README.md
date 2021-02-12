## WebAssembly Chrome Extension (in C# and Blazor)

### Installation instructions:

1. Download the latest (.zip) from https://github.com/Muhammad-Waleed-Hafeez/webassembly-chrome-extension-master
1. Unpack (e.g. to `~/webassembly-chrome-extension`)
1. In Chrome go to `chrome://extensions/`
1. Enable [Developer mode] (if not enabled)
1. Click [Load unpacked]
1. Go inside the unzipped folder (e.g. inside `webassembly-chrome-extension-master\WebAssemblyBlazorChromeExtension\bin\Debug\netstandard2.1\wwwroot`)
1. Click [wwwroot folder] and then click on [select folder] button to upload the extension.

### Build instructions (build the project after editing into the code) :

1. Open this repo in Visual Studio 2019 (or newer)
   1. Click [Build] -> [Build Solution] (or press Ctrl + Shift + B)
2. In Chrome go to `chrome://extensions/`
   1. Enable [Developer mode] (if not enabled)
   1. Click [Load unpacked]
   1. Point to `...\webassembly-chrome-extension-master\WebAssemblyBlazorChromeExtension\bin\Debug\netstandard2.1\wwwroot` 
   1. Click [Select Folder]/[Open] button
 