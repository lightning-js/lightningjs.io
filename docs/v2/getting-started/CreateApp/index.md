# Create a New Lightning App


When you create a new Lightning App, you create a  *blueprint* App that is based on a predefined [template](/lightning-core-reference/Templates/index). This template defines the [Render Tree](/lightning-core-reference/RenderEngine/RenderTree.md) with the necessary elements and properties. The required  dependencies for Lightning Core &amp; SDK are also created.


Creating your App also involves running and testing it in your browser, to verify that it works correctly.


Perform the following steps to create a new *blueprint* Lightning App:

1. Use the Lightning CLI command `lng create` to interactively create a new Lightning App project.
2. Ensure that the required dependencies are installed by executing `npm install` in the project's *root* folder. (The `lng create` command installs these *NPM dependencies* by default, but you have the option to skip this. That is the reason why you have to perform this step.)
3. Check if the proper folder structure has been created by opening the root folder of your project in an Explorer / Finder window.
4. Verify that the following folder structure exists:

	![](../../Resources/Images/CreateAPP/FolderStructure_Create.png)

The (relevant) files and folders have the following meanings:

* **.vscode**: only present if you have Visual Studio code
* **/node_modules**: (tree of) dependencies that are relevant for the project (among which are the Lightning Core and SDK dependencies)
* **/src**: your App (**App.js**) and the file to launch your App (**index.js**)
* **/static**: static assets of your project, such as images and fonts
* **.editorconfig**: configuration file for the Visual Code editor (only present if you have Visual Studio code)
* **.eslint** files: only present if you have enabled [ESlint](https://eslint.org/) during `lng create`
* **metadata.json**: App-related metadata
* **package.json**: project-related metadata
* **README.md**: instructions for configuration, installation, changelogs, et cetera
* **settings.json**: App-specific and platform-specific settings. (See the [Runtime Configuration](/lightning-core-reference/RuntimeConfig/index) settings for details.)

> If you want to see the *Lightning SDK* documentation for the App that you are currently developing, run the command `lng docs` in the project's root folder. This opens a local web server containing the documentation that matches the *exact* SDK version that your App is using.
