import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, WIDTH } from '../styles/Dimension'
import CharacterButton from '../components/CharacterButton'
import { evaluate } from 'mathjs'

const MainScreen = () => {
  const characters = ['AC', 'DEL', '%', '/', 7, 8, 9, '*',
    4, 5, 6, '+', 1, 2, 3, '-', 0, '00', '.', '=']

  const [equation, setEquation] = useState('')
  const [result, setResult] = useState('')
  const onClickChar = (nextChar) => {
    setEquation([...equation, nextChar])
  }
  const onClickEqual = () => {
    setResult(evaluate(equation))
  }
  const onClickDelete = () => {
    setEquation(equation.substring(0, equation.length() - 1))
  }
  const onClickClear = () => {
    setEquation('')
  }
  // const checkSwitch = (char) => {
  //   switch (char) {
  //     case char === 'AC':
  //       onClickClear()
  //       break
  //     case char === 'DEL':
  //       onClickDelete()
  //       break
  //     case char === '=':
  //       onClickEqual()
  //       break
  //     default:
  //       onClickChar(char)
  //       break
  //   }
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultSection}>
        <Text style={styles.font}>{equation}</Text>
      </View>
      <View style={styles.numberSection}>
        {characters.map((char) =>
          <CharacterButton character={char} key={char} onPress={(e) => setEquation(e)} />)}
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.moreDark
  },
  resultSection: {
    backgroundColor: COLOR.moreDark,
    flex: 1,
    width: WIDTH,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    padding: WIDTH * 0.05
  },
  numberSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.lightDark,
    flex: 2,
    width: WIDTH,
    borderTopRightRadius: WIDTH * 0.075,
    borderTopLeftRadius: WIDTH * 0.075,
    padding: WIDTH * 0.05,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  font: {
    ...FONT.h0,
    color: COLOR.white

  }
})
