import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
  bg: {
    height: sizes.screenHeight,
    padding: sizes.baseMargin,
  },
  dflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  padding: {
    padding: sizes.screenWidth * 0.06,
  },
  heading: {
    color: colors.white,
    fontSize: fontSize.h5,
    right: sizes.screenWidth * 0.2,
  },
  buttonBg: {
    backgroundColor: colors.primary,
    padding: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.2,
    alignSelf: 'flex-end',
    borderRadius: sizes.screenWidth * 0.015,
    // left: sizes.screenWidth * 0.15,
  },
  buttonText: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  listView: {
    backgroundColor: colors.coinbox,
    height: sizes.screenWidth * 0.3,
    width: sizes.screenWidth * 0.95,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.01,
    borderRadius:sizes.screenHeight*0.015
  },
  row: {
    flexDirection: 'row',
    // justifyContent:'center'
  },
  cardHead: {
    color: colors.white,
    fontSize: fontSize.h6,
    top: sizes.screenHeight * 0.01,
  },
  dropIcon: {
    backgroundColor: colors.iconBg,
    left: sizes.screenWidth * 0.13,
    top: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.035,
    alignItems: 'center',
  },
  cardSubHead: {
    color: colors.red,
    fontSize: fontSize.small,
    top: sizes.screenHeight * 0.01,
  },
  bottomView: {
    top: sizes.screenHeight * 0.05,
    right: sizes.screenWidth * 0.13,
  },
  bottomHead: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  price: {
    color: colors.white,
    fontSize: fontSize.h6,
    left: sizes.screenWidth * 0.05,
  },
  rateRed: {
    color: colors.red,
    left: sizes.screenWidth * 0.25,
    fontSize: fontSize.h6,
  },
  rateGreen:{
    color: colors.green,
    left: sizes.screenWidth * 0.25,
    fontSize: fontSize.h6,   
  }
});
