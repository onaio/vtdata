# Integrated Response Platform - Somalia

This is a dashboard platform used for reporting and coordinating the DFID drought response in Somalia using map visualization.

## Project Structure
```
|- config
|- dist
   |- assets
      |- js
         |- bundle.js
         |- wrappers.js
   |- data
   |- index.html
|- src
   |- components
      |- App
      |- Controls
      |- Layers
      |- Login
      |- Map
      |- Menu
      |- Sectors
   |- includes
   |- entry.js
|- wrappers
   |- src
      |- cljs
         |- wrappers
```

## Development
Install dependecies:
```
$ npm install
```
Start dev server:
```
$ npm run dev

or 

webpack-dev-server --inline
```
Go to 
```
https://localhost:8080
```
Source files are compiled into `bundle.js` using `webpack`.

### Wrappers
The dashboard makes use of [Milia](https://github.com/onaio/milia#milia) to pull data from the [Ona REST API](https://api.ona.io/static/docs/) and Clojurescript functions to run statistical aggregations on data from the API. 

Wrappers are compiled into `wrappers.js` using `lein-cljsbuild`.

To compile changes to wrappers in dev mode:
```
$ lein cljsbuild auto dev
```

### Tests

- ***TODO***

## Deployment

### Staging

Deploying to http://stage-irfsomalia.onalabs.org/

1. Log into admin host:
```
$ ssh ubuntu@ah-eu-west.onalabs.org
```

2. su to devops user:
```
$ sudo su - devops
```
3. Activate playbooks virtual env:

```
$ workon playbooks
```

4. Run ansible-playbook:
```
$ ansible-playbook -i inventory/irp-somalia-staging.ini irp.yaml --extra-vars='{"git_branch": "develop"}' --vault-password-file ~/.vault_pass.txt -vvvv
```

### Production

Deploying to http://irfsomalia.onalabs.org/

1. Pull latest changes on `develop` branch
```
$ git pull
```
2. Update `bundle.js`
```
$ export NODE_ENV=production && webpack -p --progress
```
3. Update `wrappers.js` - (optional, if CLJS wrappers were changed)
```
$ lein cljsbuild once prod
```
4. Commit changes to bundle.js
```
$ git add . && git commit -m 'Update bundle.js'
```
5. Push changes to develop
```
$ git push origin develop
```
6. Deploy to gh-pages
```
$ git subtree push --prefix dist origin gh-pages
```
