/**
 * rn-custom-toast
 * https://github.com/roundcubelabs/rn-custom-toast
 * https://roundcubelabs.com
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Linking } from 'react-native';
// import { Toast } from 'rn-custom-toast'
import Toast from './Toast'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  open

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(35,35,35)', width: '100%' }}>
          <Image source={{ uri: "http://roundcubelabs.com/images/rcLabs1.png" }}
            style={{ height: 170, width: 170 }} />
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> rn-custom-toast </Text>
          <Text style={{ fontSize: 15, color: 'white', paddingBottom: 15 }}>roundCube Labs</Text>
        </View>

        <ScrollView style={{ flex: 2, width: '100%' }}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 10 }}>THEMES</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is light toast", {
              theme: "light",
            })
          }}>
            <Text>Light Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is dark toast", {
              theme: "dark",
            })
          }}>
            <Text>Dark Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is success toast", {
              theme: "success",
            })
          }}>
            <Text>Success Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is danger toast", {
              theme: "danger",
            })
          }}>
            <Text>Danger Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is warning toast", {
              theme: "warning",
            })
          }}>
            <Text>Warning Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is info toast", {
              theme: "info",
            })
          }}>
            <Text>Info Toast</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>POSITION</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is top toast", {
              position: 'top'
            })
          }}>
            <Text>Top Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is bottom toast", {
              position: 'bottom'
            })
          }}>
            <Text>Bottom Toast</Text>
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>ANIMATION</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is fading toast", {
              animation: 'fade'
            })
          }}>
            <Text>Fade Animation Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is bottom toast", {
              animation: 'slide'
            })
          }}>
            <Text>Slide Animation Toast</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>DURATION</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is long duration toast", {
              duration: 'long'
            })
          }}>
            <Text>Long Duration Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This is short duration toast", {
              duration: 'short'
            })
          }}>
            <Text>Short Duration Toast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("This toast will close after 7 seconds", {
              duration: 7000
            })
          }}>
            <Text>7 seconds Toast</Text>
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>CLOSE BUTTON</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast with close button", {
              showCloseButton: true
            })
          }}>
            <Text>Toast with close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast without close button", {
              showCloseButton: false
            })
          }}>
            <Text>Toast without close</Text>
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>ANIMATION DURATION</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast with animation lasting 300ms", {
              animationDuration: 300
            })
          }}>
            <Text>Animation Duration 300ms</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast with animation lasting 2s", {
              animationDuration: 2000
            })
          }}>
            <Text>Animation Duration: 2s</Text>
          </TouchableOpacity>



          <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 30 }}>SHADOW</Text>

          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast with shadow", {
              shadow: true
            })
          }}>
            <Text>Toast with shadow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.refs.toast.show("Toast without shadow", {
              shadow: false
            })
          }}>
            <Text>Toast without shadow</Text>
          </TouchableOpacity>



          <TouchableOpacity
            style={{ padding: 30 }}
            onPress={() => {
              this.refs.toast.show("Just another customized toast", {
                shadow: false,
                theme: "dark",
                animation: 'slide',
                showCloseButton: false,
                duration: 'short',
                animationDuration: 500

              })
            }}>
            <Text>Custom Example</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => {
              this.refs.toast.show("Just another toast with custom theme", {
                customTheme: {
                  container: {
                    backgroundColor: 'red'
                  },
                  closeContainer: {
                    backgroundColor: 'yellow',
                  },
                  text: {
                    color: 'green',
                    backgroundColor: 'transparent'
                  },
                  closeText: {
                    color: 'orange',
                    backgroundColor: 'transparent'

                  }
                }

              })
            }}>
            <Text>Custom Theme</Text>
          </TouchableOpacity>






          <TouchableOpacity onPress={() => {
            this.refs.toast.hide()
          }}>
            <Text>Hide Toast</Text>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { Linking.openURL('http://www.roundcubelabs.com') }}>
            <Text style={{ color: 'white', textAlign: 'center', padding: 3 }}>roundcubelabs.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/roundcubelabs/rn-custom-toast') }}>
            <Text style={{ color: 'white', textAlign: 'center', padding: 3 }}>github.com/roundcubelabs/rn-custom-toast</Text>
          </TouchableOpacity>
        </View>

        <Toast
          ref="toast"
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'rgb(35,35,35)',
    width: '100%',
    padding: 4
  }
})