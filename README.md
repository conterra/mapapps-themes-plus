# Themes Plus Bundle
The themes plus bundle provides a variety of new map.apps themes.
* plus-ice
* plus-light
* plus-lime
* plus-orange
* plus-purple

Installation Guide
------------------
After installing the bundle, you can use the new themes in each of your map.apps apps. In the sample app, you can switch through the different themes with the theme selector in the top right corner.

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

