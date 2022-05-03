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

const SignInScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientCF}
        endY={100}
        endX={100}
        color2={theme.colors.primary}
        color1={theme.colors.darker_pink}
        startX={0}
      >
        <KeyboardAwareScrollView
          style={styles.KeyboardAwareScrollViewXr}
          showsVerticalScrollIndicator={true}
        >
          <View>
            <Image
              style={styles.Imagewv}
              source={Images.LogoWhite}
              resizeMode={'contain'}
            />
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <View>
            <View>
              <Text style={[styles.TextYG, { color: theme.colors.surface }]}>
                {'Email'}
              </Text>

              <View
                style={[
                  styles.ViewQg,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconmJ}
                  name={'MaterialIcons/alternate-email'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.ViewaH}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputbb,
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
              <Text style={[styles.TextS1, { color: theme.colors.surface }]}>
                {'Password'}
              </Text>

              <View
                style={[
                  styles.Viewar,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.IconKo}
                  name={'MaterialIcons/lock-outline'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.ViewWn}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputSc,
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
                styles.ButtonSolidnm,
                {
                  color: theme.colors.surface,
                  borderColor: theme.colors.mediumInverse,
                  backgroundColor: theme.colors.transparent,
                },
              ]}
              title={"Let's Go"}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.ViewGb}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('AuthStack', {
                      screen: 'SignUpScreen_xWq5H1BT',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.LinkNP, { color: theme.colors.surface }]}
                title={"Don't have an account? Sign up"}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagewv: {
    width: 125,
    height: 32,
  },
  TextKB: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextDS: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  TextYG: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconmJ: {
    width: 20,
    height: 20,
  },
  TextInputbb: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
  },
  ViewaH: {
    flex: 1,
    marginLeft: 4,
  },
  ViewQg: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextS1: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  IconKo: {
    width: 20,
    height: 20,
  },
  TextInputSc: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewWn: {
    flex: 1,
    marginLeft: 4,
  },
  Viewar: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonSolidnm: {
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
  LinkNP: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewGb: {
    alignSelf: 'center',
  },
  KeyboardAwareScrollViewXr: {
    justifyContent: 'center',
    paddingLeft: 48,
    paddingTop: 48,
    paddingRight: 48,
    paddingBottom: 48,
  },
  LinearGradientCF: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(SignInScreen);
