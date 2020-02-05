# Template Specs/Guide  

## Technologies  

### Electron  

There is currently only a build config for windows.  

You may store your build configs in build.config.json.  

### React  

This is a standard create-react-app template with custom commands.  

### Redux  

This is a basic Redux boilerplate to get started.  

> The app is a counter application by default, which you must remove to begin.  

## Guide  

### Initialization  

Find all instances of "FILL_IN" and replace with your custom information for the project in the following files:  

- package.json
- build.config.json

> N.B. All of these fields are required to build the Electron app.  
DO NOT REMOVE ANY.  

### npm Scripts  

#### start  

> create-react-app start script (starts the local development server on port 3000)  

#### build:react  

> create-react-app build script (builds the src and public to static)

#### postbuild:react  

*You will never need to run this manually.*  

> *runs immediately after build:react*  
converts the static file imports in the index.html file to work within the electron app.  

#### build:win  

*Runs build script manually so you can duplicate for other systems.*    

> runs build react and then an electron app for windows (no installer).  
can be built from any system.
 

#### predist

*You will never need to run this manually.*  

> *runs immediately before dist*  
runs build react  

#### dist

*You must run this on the os of intended distribution.*  

> builds an electron app installer based on the specifications in package.json build object.

