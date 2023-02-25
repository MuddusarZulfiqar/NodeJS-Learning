# What is NPM?

npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.

# What is Node.js?

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

# What is a package?

A package is a module of code that you can reuse in your own projects. A package is a folder or directory that lives inside your project’s node_modules directory. A package typically consists of a package.json file and a folder containing a JavaScript file with the same name as the package.

# What is a package.json file?

A package.json file is a file that lives in the root directory of a Node.js project. It lists the package dependencies for the project. It also holds various metadata relevant to the project.

# What is a dependency?

A dependency is a package required by your application in order to run. Dependencies are listed in the package.json file.

# What is a devDependency?

A devDependency is a package that is only needed for local development and testing. devDependencies are not required to run the application in production. devDependencies are listed in the package.json file.

# What is a peerDependency?

A peerDependency is a package required by your application, but it is not installed automatically. Instead, it is the responsibility of the user of your module to install it. peerDependencies are listed in the package.json file.

# What is a global package?

A global package is a package installed on your system outside of the current project. Global packages are installed using the -g flag when using the npm install command.

# What is a local package?

A local package is a package that is installed as a dependency of the current project. Local packages are installed by default when using the npm install command.

# What is a package-lock.json file?

A package-lock.json file is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

# What is a shrinkwrap file?

A shrinkwrap file is a file that contains information about the npm dependencies of a project. It guarantees that the dependencies of a project that is installed on one machine will be installed in the same way on any other machine, regardless of intermediate dependency updates.

# What is a package manager?

A package manager is a tool that automates the process of installing, upgrading, configuring, and removing packages. npm is a package manager for JavaScript.
