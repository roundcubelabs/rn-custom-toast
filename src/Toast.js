import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityAnimation: new Animated.Value(0),
            slideInTopAnimation: new Animated.Value(-200),
            slideInBottomAnimation: new Animated.Value(-200),
            visible: false,
            theme: "light",
            shadow: true,
            position: "bottom",
            animation: "fade",
            showCloseButton: true,
            animationDuration: 300
        };

    }

    show(content, options) {

        this.setState({
            visible: true,
            theme: options.theme ? options.theme : "light",
            shadow: options.shadow !== undefined ? options.shadow : true,
            position: options.position ? options.position : "bottom",
            animation: options.animation ? options.animation : "fade",
            showCloseButton: options.showCloseButton !== undefined ? options.showCloseButton : true,
            duration: options.duration ? options.duration : "short",
            animationDuration: options.animationDuration ? options.animationDuration : 300,
            content: content
        }, () => {
            this.showToast()

        })
    }

    hide() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = 0;
        }
        this.hideToast()
    }


    showToast = () => {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = 0;
        }
        const { opacityAnimation, duration, slideInTopAnimation, animation, position, slideInBottomAnimation, animationDuration } = this.state;
        if (animation.toLowerCase() === "fade") {
            Animated.timing(
                opacityAnimation,
                {
                    toValue: 1,
                    duration: animationDuration,
                }
            ).start();
            if (typeof duration === "string") {
                if (duration.toLowerCase() === "short") {
                    this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 2500)
                }
                else if (duration.toLowerCase() === "long") {
                    this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 6000)
                }
                else if (parseInt(duration)) {
                    this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + parseInt(duration))
                }
            }
            else if (typeof duration === "number") {
                this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + duration)
            }
        }
        else if (animation.toLowerCase() === "slide") {

            if (position.toLowerCase() === "top") {
                Animated.timing(
                    slideInTopAnimation,
                    {
                        toValue: 40,
                        duration: animationDuration,
                    }
                ).start();
                if (typeof duration === "string") {
                    if (duration.toLowerCase() === "short") {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 2500)
                    }
                    else if (duration.toLowerCase() === "long") {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 6000)
                    }
                    else if (parseInt(duration)) {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + parseInt(duration))
                    }
                }
                else if (typeof duration === "number") {
                    this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + duration)
                }
            }
            else if (position.toLowerCase() === "bottom") {
                Animated.timing(
                    slideInBottomAnimation,
                    {
                        toValue: 40,
                        duration: animationDuration,
                    }
                ).start();
                if (typeof duration === "string") {
                    if (duration.toLowerCase() === "short") {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 2500)
                    }
                    else if (duration.toLowerCase() === "long") {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + 6000)
                    }
                    else if (parseInt(duration)) {
                        this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + parseInt(duration))
                    }
                }
                else if (typeof duration === "number") {
                    this.hideTimeout = setTimeout(() => { this.hideToast() }, animationDuration + duration)
                }
            }

        }




    }

    hideToast = () => {
        const { opacityAnimation, animation, position, slideInBottomAnimation, slideInTopAnimation, animationDuration } = this.state;
        if (animation.toLowerCase() === "fade") {

            Animated.timing(
                opacityAnimation,
                {
                    toValue: 0,
                    duration: animationDuration,
                }
            ).start();
        }
        else if (animation.toLowerCase() === "slide") {

            if (position.toLowerCase() === "top") {
                Animated.timing(
                    slideInTopAnimation,
                    {
                        toValue: -200,
                        duration: animationDuration,
                    }
                ).start();

            }
            else if (position.toLowerCase() === "bottom") {
                Animated.timing(
                    slideInBottomAnimation,
                    {
                        toValue: -200,
                        duration: animationDuration,
                    }
                ).start();
            }

        }
        this.hideTimeout = setTimeout(() => { this.setState({ visible: false }) }, animationDuration)



    }






    render() {
        const { theme, position, animation } = this.state;
        const themeStyle = styles[theme];
        const themeCloseStyle = styles[theme + "Close"]
        const themeStyleBorder = styles[theme + "Border"]
        const positionStyle = styles[position.toLowerCase() + "Container"]
        return (
            <Animated.View style={
                [styles.container, themeStyle, themeStyleBorder,
                this.state.shadow ? styles.shadow : null, positionStyle,
                {
                    opacity: animation.toLowerCase() === "fade" ? this.state.opacityAnimation : 1,
                    top: animation.toLowerCase() === "slide" && position.toLowerCase() === "top" ?
                        this.state.slideInTopAnimation :
                        position.toLowerCase() === "top" ? 40 : "auto",
                    bottom: animation.toLowerCase() === "slide" && position.toLowerCase() === "bottom" ?
                        this.state.slideInBottomAnimation :
                        position.toLowerCase() === "bottom" ? 40 : "auto",
                    display: this.state.visible ? "flex" : "none"

                }]}>
                <View style={styles.content} >
                    {typeof this.state.content !== "object" ?
                        (<Text style={themeStyle}>{this.state.content}</Text>
                        )
                        :
                        (this.state.content)
                    }
                </View>
                {this.state.showCloseButton ?
                    (
                        <TouchableOpacity style={[styles.closeButton, themeCloseStyle]} onPress={() => { this.hideToast() }}>
                            <Text style={[styles.closeButtonText, themeStyle]}>Close</Text>
                        </TouchableOpacity>
                    )
                    :
                    null
                }

            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '80%',
        left: '10%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topContainer: {
        top: 40
    },
    bottomContainer: {
        bottom: 40
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        flex: 1,
        padding: 10
    },
    closeButton: {
        padding: 10,
        borderLeftColor: 'rgba(0,0,0,0.05)',
        borderLeftWidth: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {},

    light: {
        backgroundColor: 'white',
        color: 'rgb(1,1,1)',
    },
    lightClose: {
        borderLeftColor: 'rgba(0,0,0,0.05)',
    },
    lightBorder: {
        borderColor: "rgb(240,240,240)",
        borderWidth: 1
    },

    dark: {
        backgroundColor: 'rgb(45,45,45)',
        color: 'white',
    },
    darkClose: {
        borderLeftColor: 'rgba(255,255,255,0.05)',
    },
    darkBorder: {
        borderColor: "rgba(20,20,20,0.8)",
        borderWidth: 1
    },

    success: {
        backgroundColor: 'rgb(139, 195, 74)',
        color: 'rgba(255,255,255,0.9)',
    },
    successClose: {
        borderLeftColor: 'rgba(255,255,255,0.1)',
    },
    successBorder: {
        borderColor: "rgba(124, 179, 66,0.6)",
        borderWidth: 1
    },

    danger: {
        backgroundColor: 'rgb(244, 67, 54)',
        color: 'rgba(255,255,255,0.9)',
    },
    dangerClose: {
        borderLeftColor: 'rgba(255,255,255,0.1)',
    },
    dangerBorder: {
        borderColor: "rgba(229, 57, 53,0.6)",
        borderWidth: 1
    },

    warning: {
        backgroundColor: 'rgb(255, 152, 0)',
        color: 'rgba(255,255,255,0.9)',
    },
    warningClose: {
        borderLeftColor: 'rgba(255,255,255,0.1)',
    },
    warningBorder: {
        borderColor: "rgba(251, 140, 0,0.6)",
        borderWidth: 1
    },

    info: {
        backgroundColor: 'rgb(3, 169, 244)',
        color: 'rgba(255,255,255,0.9)',
    },
    infoClose: {
        borderLeftColor: 'rgba(255,255,255,0.1)',
    },
    infoBorder: {
        borderColor: "rgba(3, 155, 229,0.6)",
        borderWidth: 1
    },

})