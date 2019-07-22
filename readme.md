# rn-custom-toast
 Module for react-native to show android like toast messages on both Android and iOS with customisations.
 ![NPM Version](https://img.shields.io/npm/v/rn-custom-toast.svg?style=popout-square&color=blue)  ![Repo Size](https://img.shields.io/github/repo-size/roundcubelabs/rn-custom-toast.svg?style=popout-square&color=blue)  ![Downloads](https://img.shields.io/npm/dw/rn-custom-toast.svg?color=blue&style=popout-square)
![roundCube Labs](https://img.shields.io/badge/Package%20By-roundCubeLabs-blue.svg)

![ rn-custom-toast Demo](https://i.postimg.cc/k49WkQf4/rn-custom-toast-gif.gif)


## Setup
This package is available on npm, install it with: 
`npm install --save rn-custom-toast`

## Usage
1.  Import **rn-custom-toast** to your project:
    `import { Toast } from  'rn-custom-toast'`

2. Create a toast and add reference to it: 
    `<Toast ref="toast" />`

3. Whenever you want to open toast call the function like this:
> this.refs.toast.show(Message to display, Options Object)

Example Code:
`this.refs.toast.show("This is a toast", {theme:  "dark"});`

 4. Close the toast (Optional ,since by default it closes automatically):
 `this.refs.toast.hide()`

## Complete Example

    import React, { Component } from "react";
    import { View, Text, TouchableOpacity } from "react-native";
    import { Toast } from "rn-custom-toast";
    export default class App extends Component {
      render() {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.refs.toast.show("I am a toast", {
                  shadow: false,
                  theme: "dark",
                  position: "bottom",
                  animation: "slide",
                  showCloseButton: false,
                  duration: "short",
                  animationDuration: 500
                });
              }}
            >
              <Text>Display Toast</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.refs.toast.hide();
              }}
            >
              <Text>Hide Toast</Text>
            </TouchableOpacity>
            <Toast ref="toast" />
          </View>
        );
      }
    }
For a much detailed example take a look at the  `/examples`  directory.
## Available Props

|        Name       	|        Type       	| Default 	|                    Possible Values                   	|
|:-----------------:	|:-----------------:	|:-------:	|:----------------------------------------------------:	|
|       theme       	|       String      	|  light  	| ["light","dark","success","danger","warning","info"] 	|
|      position     	|       String      	|  bottom 	|                   ["top","bottom"]                   	|
|     animation     	|       String      	|   fade  	|                   ["fade","slide"]                   	|
|      duration     	| String or Integer 	|  short  	|           ["short","long"] or Milliseconds           	|
|  showCloseButton  	|        bool       	|   true  	|                     [true,false]                     	|
| animationDuration 	|      Integer      	|   300   	|                     Milliseconds                     	|
|       shadow      	|        bool       	|   true  	|                      [true,false]                     	|


## Feedback
Pull requests, suggestions and feedbacks are welcome!


## Links
[Our Website](http://www.roundcubelabs.com)
[Our Facebook](http://www.facebook.com/roundCubeLabs)
[Our Linkedin](https://www.linkedin.com/company/roundcubelabs/)
[Our Instagram](https://www.instagram.com/roundcubelabs/)