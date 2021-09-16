import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CharacterButton from '../components/CharacterButton';
import {evaluate} from 'mathjs';
import {COLOR} from '../styles/Color';
import {FONT, HEIGHT, WIDTH} from '../styles/Dimension';
import {addHistory, clearHistory} from '../redux/actions/historyAction';
import {useDispatch, useSelector} from 'react-redux';

const MainScreen = () => {
  // array of characters
  const characters = [
    'AC',
    'DEL',
    'HIST',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '-',
    0,
    '00',
    '.',
    '=',
  ];

  // redux
  const calcHist = useSelector((state) => state.historyReducer.calculatorHist);
  const dispatch = useDispatch();
  // hooks
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState(null);
  const [openHistModal, setOpenHistModal] = useState(false);

  const onClickChar = (nextChar) => {
    setEquation(`${equation}${nextChar}`);
  };
  const onClickEqual = (equation) => {
    setResult(String(evaluate(equation)));
    const res = `${equation}=${evaluate(equation)}`;
    dispatch(addHistory(res));
  };
  const onClickDelete = () => {
    setEquation(equation.slice(0, -1));
  };
  const onClickClear = () => {
    setEquation('');
    setResult(null);
  };
  const onClickClearHistory = () => {
    dispatch(clearHistory());
  };
  const onClickHist = () => {
    setOpenHistModal(!openHistModal);
  };
  const checkSwitch = (char, eq = equation, res = result) => {
    switch (char) {
      case 'AC':
        onClickClear();
        break;
      case 'DEL':
        onClickDelete();
        break;
      case 'HIST':
        onClickHist();
        break;
      case '=':
        onClickEqual(eq);
        break;
      default:
        onClickChar(char);
        break;
    }
  };
  console.log(calcHist);
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent
        visible={openHistModal}
        onRequestClose={() => {
          setOpenHistModal(!openHistModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                ...FONT.h4,
                fontSize: 25,
                fontWeight: '600',
                color: COLOR.white,
              }}>
              History
            </Text>
            {calcHist === null ? (
              <Text>No History</Text>
            ) : (
              calcHist.map((hist) => (
                <Text
                  style={styles.fontModal}
                  key={hist.id}
                  accessibilityLabel="historyText">
                  {hist.equation}
                </Text>
              ))
            )}
            {/* <TouchableOpacity
              style={{ ...styles.button, backgroundColor: COLOR.red }}
              onPress={() => onClickClearHistory()}
            >
              <Text style={styles.fontModal}>Clear History</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenHistModal(!openHistModal)}
              accessibilityLabel="button-Close">
              <Text style={styles.fontModal}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.equationSection}>
        {result === null ? (
          <Text style={styles.fontDefault} accessibilityLabel="equationText">
            {equation}
          </Text>
        ) : (
          <Text style={styles.fontDefault} accessibilityLabel="resultText">
            {result}
          </Text>
        )}
      </View>
      <View style={styles.numberSection}>
        {characters.map((char) => (
          <CharacterButton
            character={char}
            key={char}
            onPress={(char) => checkSwitch(char)}
            accessibilityLabel={`button-${char}`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

// const mapStateToProps = ({ equation, result }) => ({ equation, result })
// const mapDispatchToProps = dispatch => ({
//   add: payload => dispatch(actions.addHistory(payload)),
//   clear: () => dispatch(actions.clearHistory())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.moreDark,
    justifyContent: 'center',
  },
  equationSection: {
    backgroundColor: COLOR.moreDark,
    flex: 1,
    width: WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: WIDTH * 0.05,
  },
  resultSection: {
    backgroundColor: COLOR.moreDark,
    flex: 1,
    width: WIDTH,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    padding: WIDTH * 0.05,
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
    flexWrap: 'wrap',
  },
  fontDefault: {
    ...FONT.h0,
    color: COLOR.white,
  },
  fontEquation: {
    ...FONT.h1,
    color: COLOR.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.5,
    height: HEIGHT * 0.055,
    borderRadius: WIDTH * 0.02,
    marginTop: HEIGHT * 0.01,
    backgroundColor: COLOR.lightDark,
  },
  fontModal: {
    ...FONT.body3,
    color: COLOR.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLOR.moreDark,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  lineDivider: {
    flex: 1,
    height: 1,
    backgroundColor: COLOR.black,
    marginVertical: HEIGHT * 0.01,
  },
});
