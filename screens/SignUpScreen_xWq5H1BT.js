import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen_xWq5H1BT = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientEF}
        endY={100}
        endX={100}
        color2={theme.colors.primary}
        color1={theme.colors.darker_pink}
        startX={0}
      >
        <KeyboardAwareScrollView
          style={styles.KeyboardAwareScrollViewbY}
          showsVerticalScrollIndicator={true}
        >
          <View>
            <Image
              style={styles.ImageDS}
              source={Images.LogoWhite}
              resizeMode={'contain'}
            />
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <View>
            <View>
              <Text style={[styles.TextBA, { color: theme.colors.surface }]}>
                {'Name'}
              </Text>

              <View
                style={[
                  styles.Viewlf,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Iconwi}
                  name={'Feather/user'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.Viewrx}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputAL,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'Jane Doh'}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    autoCapitalize={'words'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View>
              <Text style={[styles.TextYs, { color: theme.colors.surface }]}>
                {'Email'}
              </Text>

              <View
                style={[
                  styles.ViewET,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconX4}
                  name={'MaterialIcons/alternate-email'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.ViewjQ}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputN3,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'JaneDoh@email.com'}
                    keyboardType={'email-address'}
                    placeholderTextColor={theme.colors.lightInverse}
                    autoCapitalize={'none'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View>
              <Text style={[styles.TextMx, { color: theme.colors.surface }]}>
                {'Password'}
              </Text>

              <View
                style={[
                  styles.Viewut,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconXz}
                  name={'MaterialIcons/lock-outline'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.Viewje}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputqK,
                      { color: theme.colors.surface },
                    ]}
                    value={null}
                    placeholder={'MySecretPassword'}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          <Spacer top={32} right={8} bottom={32} left={8} />
          <View>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('MainTabs', { screen: 'HomeScreen' });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidQt,
                {
                  color: theme.colors.surface,
                  borderColor: theme.colors.mediumInverse,
                  backgroundColor: theme.colors.transparent,
                },
              ]}
              title={'Get Started'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.Viewbb}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('SignInScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Linkf2, { color: theme.colors.surface }]}
                title={'Already have an account? Sign in'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageDS: {
    width: 125,
    height: 32,
  },
  TextSb: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  Text_0Z: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  TextBA: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  Iconwi: {
    width: 20,
    height: 20,
  },
  TextInputAL: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  Viewrx: {
    flex: 1,
    marginLeft: 4,
  },
  Viewlf: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextYs: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconX4: {
    width: 20,
    height: 20,
  },
  TextInputN3: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  ViewjQ: {
    flex: 1,
    marginLeft: 4,
  },
  ViewET: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextMx: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconXz: {
    width: 20,
    height: 20,
  },
  TextInputqK: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  Viewje: {
    flex: 1,
    marginLeft: 4,
  },
  Viewut: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonSolidQt: {
    borderRadius: 12,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
  },
  Linkf2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  Viewbb: {
    alignSelf: 'center',
  },
  KeyboardAwareScrollViewbY: {
    justifyContent: 'center',
    paddingLeft: 48,
    paddingTop: 48,
    paddingRight: 48,
    paddingBottom: 48,
  },
  LinearGradientEF: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(SignUpScreen_xWq5H1BT);
