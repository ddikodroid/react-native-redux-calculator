import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculator</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
