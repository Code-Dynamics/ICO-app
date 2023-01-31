import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SlideOne, SlideTow, SlideThree} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../services';

const Spot = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={[styles.dflex, styles.padding]}>
          <Image source={images.spots} />
          <Text style={styles.heading}>Sports</Text>
          <TouchableOpacity>
            <View style={styles.buttonBg}>
              <Text style={styles.buttonText}>Results</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.XRP} />
          <View>
            <Text style={styles.cardHead}>Ripple (XRP)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.79905</Text>
              <Text style={styles.rateRed}>-1.47%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.BUSD} />
          <View>
            <Text style={styles.cardHead}>Binance (BUSD)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.27905</Text>
              <Text style={styles.rateGreen}>+5.47%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.DOT} />
          <View>
            <Text style={styles.cardHead}>Polkadot (DOT)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.32905</Text>
              <Text style={styles.rateGreen}>+7.42%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.WBTC} />
          <View>
            <Text style={styles.cardHead}>Ripple (XRP)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.79905</Text>
              <Text style={styles.rateRed}>-1.47%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.AVAX} />
          <View>
            <Text style={styles.cardHead}>Binance (BUSD)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.27905</Text>
              <Text style={styles.rateGreen}>+5.47%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.listView, styles.row]}>
          <Image source={images.LTC} />
          <View>
            <Text style={styles.cardHead}>Polkadot (DOT)</Text>
            <Text style={styles.cardSubHead}>Open up 10/12/2022</Text>
            <View style={[styles.bottomView, styles.row]}>
              <Text style={styles.bottomHead}>Current Price</Text>
              <Text style={styles.price}>0.32905</Text>
              <Text style={styles.rateGreen}>+7.42%</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.dropIcon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Spot;
