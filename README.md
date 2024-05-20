# ESlint Config troweb

Base eslint config for troweb projects to use.

We support the following in our config:
  1. TS and TSX files are heavily linted
  2. relies on prettier for code formating (you should have a .prettierrc in the root of your project)
  3. the imports order are heavily linted using import plugin
  4. code complexity is checked using Sonar.js plugins
