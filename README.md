# Command Line Notes App

A command line based note taking application built using Node.js as part of The Complete Node.js Developer Course available on Udemy.

This application allows one to read, add, and remove their own created notes directly through the command line.

Setup
-----

Ensure that you have Node.js already installed onto your system prior to anything else.

Download the repository contents and add them to the location of your choosing.

Once situated, navigate to the directory using the command line and use:

```bash
npm install
```

Doing so will obtain the necessary dependencies for the application.

Usage
-----

Navigate to the repository location via the command line and use:

```bash
node app.js [command] [options]
```

### Available Commands

- add
- remove
- list
- read

Required options for commands will be listed if they are given the **--help** option or called without the appropriate options.

All commands will appropriately notify the user if they succeed or fail when called.

Storage
-------

All notes are stored in a **notes.json** file. If not present, the **notes.json** file will be created upon first successful usage of the **add** command.

Core Modules Used
-----------------
- [File System](https://nodejs.org/api/fs.html#fs_file_system)
- [Chalk](https://github.com/chalk/chalk)
- [Yargs](https://yargs.js.org/)