
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../styles/Color'
import { FONT, WIDTH } from '../styles/Dimension'

const CharacterButton = ({ character, keys, onPress }) => {
  const onClick = () => {
    onPress(character)
  }
  return (
    <TouchableOpacity
      key={keys}
      disabled={character === ' ' || character === '' ? true : null}
      style={styles.buttonContainer}
      onPress={onClick}
    >
      <Text
        style={[FONT.h1, { color: typeof (character) === 'number' ? COLOR.white : (character === '00' || character === '000' ? COLOR.white : (character === 'AC' || character === 'DEL' ? COLOR.red : COLOR.teal)) }]}
      >
        {character}
      </Text>
    </TouchableOpacity>
  )
}

export default CharacterButton

const styles = StyleSheet.create({
  buttonContainer: {
    width: WIDTH / 5,
    height: WIDTH / 5,
    borderRadius: WIDTH / 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.notTooDark,
    margin: 5
  },
  buttonFont: {
    ...FONT.h1
  }
})
