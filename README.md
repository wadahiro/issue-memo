# ISSUE-MEMO

- [About](#about)
- [Development](#development)
 - [Requirements](#requirements)
 - [Setup](#setup)
 - [Run with development mode](#run-with-development-mode)
 - [Release Build](#release-build)
- [License](#license)

## About

Aggregate issues from external [Issue Tracking System (ITS)](https://en.wikipedia.org/wiki/Issue_tracking_system) and add your own memo.
Currently support [Atlassian JIRA](https://jira.atlassian.com) only.

## Development

### Requirements 

* [Golang 1.6](http://golang.org/)
* [Node.js 5.x](https://nodejs.org/)

### Setup

1. Install Golang tool [GOM](https://github.com/mattn/gom) and install Golang dependencies by [GOM](https://github.com/mattn/gom) .

 ```bash
go get -u github.com/mattn/gom
gom install
 ```
2. Install gcc by OS package manager. You can use [MinGW](http://www.mingw.org/) for Windows build.
3. Install JavaScript dependencies.

 ```bash
npm install
 ```
4. Install [typings](https://github.com/typings/typings) and install TypeScript definitions.

 ```
npm install -g typings
typings install
 ```

### Run with development mode

1. Generate bindata.go.

 ```bash
npm run bindata
 ```

2. Start webpack and gin with watch mode.

 ```bash
npm run devserver & fresh
 ```
 
3. Open http://localhost:9000

### Release Build

Run webpack with production mode, go-bindata and go build in turn. All you have to do is run `npm run build`. The artifact is created under `./dist` directory.

#### For Linux 
```bash
npm run build-linux64
```

#### For Windows 
```bash
npm run build-win64
```

## License

Licensed under the [MIT](/LICENSE.txt) license.
