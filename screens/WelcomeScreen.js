import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgrounduD}
        resizeMode={'cover'}
        source={Images.WelcomeBg}
      >
        <View style={styles.ViewIG}>
          <View style={styles.ViewLX}>
            <Image
              style={styles.ImageyW}
              resizeMode={'contain'}
              source={Images.LogoWhite}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <Text
              style={[styles.TextOE, { color: theme.colors.mediumInverse }]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'Discover your next stay.'}
            </Text>

            <Text
              style={[
                theme.typography.body1,
                styles.Textcl,
                { color: theme.colors.mediumInverse },
              ]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'The best rental properties, curated for you. '}
            </Text>
          </View>

          <View style={styles.ViewHa}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('SignUpScreen_xWq5H1BT');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSoliddR,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.surface,
                },
              ]}
              title={'Create An Account'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.ViewiI}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('SignInScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Linkgj, { color: theme.colors.surface }]}
                title={'Sign in to your account'}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageyW: {
    width: 125,
    height: 50,
  },
  TextOE: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
  },
  Textcl: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewLX: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 64,
  },
  ButtonSoliddR: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  Linkgj: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewiI: {
    alignSelf: 'center',
  },
  ViewHa: {
    paddingRight: 24,
    paddingBottom: 64,
    paddingLeft: 24,
  },
  ViewIG: {
    justifyContent: 'space-between',
    flex: 1,
  },
  ImageBackgrounduD: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(WelcomeScreen);
