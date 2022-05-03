import React from 'react';
import * as ExampleUserApi from '../apis/ExampleUserApi.js';
import { Circle, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ExampleUserApi.FetchGetUserGET>
        {({ loading, error, data, refetchGetUser }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View
                style={[
                  styles.ViewvP,
                  {
                    backgroundColor: theme.colors.surface,
                    borderRadius: 12,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View>
                  <Circle size={84} bgColor={theme.colors.primary}>
                    <Image
                      style={styles.Image_6n}
                      source={{ uri: `${fetchData?.avatar}` }}
                      resizeMode={'cover'}
                    />
                  </Circle>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.View_7d}>
                  <Text style={[styles.TextdI, { color: theme.colors.strong }]}>
                    {fetchData?.full_name}
                  </Text>
                  <Spacer top={3} right={8} bottom={3} left={8} />
                  <View style={styles.ViewrT}>
                    <View style={styles.ViewAX}>
                      <Icon
                        style={styles.Iconiy}
                        name={'MaterialIcons/location-on'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[styles.Texta0, { color: theme.colors.light }]}
                      >
                        {fetchData?.city}
                        {', '}
                        {fetchData?.state}{' '}
                      </Text>
                    </View>
                    <Spacer top={8} right={8} bottom={8} left={8} />
                    <View style={styles.Viewhx}>
                      <Icon
                        style={styles.IconFH}
                        name={'MaterialIcons/alternate-email'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[styles.TextHv, { color: theme.colors.light }]}
                      >
                        {fetchData?.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.ViewJN,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text style={[styles.TextMP, { color: theme.colors.primary }]}>
                  {'Bio'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextPr,
                    { color: theme.colors.medium },
                  ]}
                >
                  {fetchData?.bio}
                </Text>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.View_2t,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text style={[styles.TextqN, { color: theme.colors.primary }]}>
                  {'More'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.ViewZV}>
                  <View style={styles.View_0t}>
                    <Text
                      style={[styles.Texty6, { color: theme.colors.strong }]}
                    >
                      {'University'}
                    </Text>
                  </View>

                  <View style={styles.ViewYD}>
                    <Text
                      style={[styles.TextUg, { color: theme.colors.medium }]}
                    >
                      {fetchData?.university}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.ViewfS}>
                  <View style={styles.ViewuO}>
                    <Text
                      style={[styles.TextmB, { color: theme.colors.strong }]}
                    >
                      {'Job Title'}
                    </Text>
                  </View>

                  <View style={styles.ViewNh}>
                    <Text
                      style={[styles.TextRP, { color: theme.colors.medium }]}
                    >
                      {fetchData?.job_title}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.ViewbP}>
                  <View style={styles.Viewej}>
                    <Text
                      style={[styles.TextfF, { color: theme.colors.strong }]}
                    >
                      {'Birthday'}
                    </Text>
                  </View>

                  <View style={styles.ViewfR}>
                    <Text
                      style={[styles.TextDi, { color: theme.colors.medium }]}
                    >
                      {fetchData?.birthdate}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </ExampleUserApi.FetchGetUserGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_6n: {
    width: 76,
    height: 76,
    alignSelf: 'center',
    borderRadius: 42,
  },
  TextdI: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  Iconiy: {
    width: 20,
    height: 20,
  },
  Texta0: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewAX: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  IconFH: {
    width: 20,
    height: 20,
  },
  TextHv: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewhx: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewrT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_7d: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewvP: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 24,
    paddingLeft: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  TextMP: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextPr: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewJN: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  TextqN: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  Texty6: {
    fontFamily: 'Poppins_500Medium',
  },
  View_0t: {
    flex: 1,
  },
  TextUg: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewYD: {
    flex: 2,
  },
  ViewZV: {
    flexDirection: 'row',
  },
  TextmB: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewuO: {
    flex: 1,
  },
  TextRP: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewNh: {
    flex: 2,
  },
  ViewfS: {
    flexDirection: 'row',
  },
  TextfF: {
    fontFamily: 'Poppins_500Medium',
  },
  Viewej: {
    flex: 1,
  },
  TextDi: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewfR: {
    flex: 2,
  },
  ViewbP: {
    flexDirection: 'row',
  },
  View_2t: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  FetchtI: {
    minHeight: 40,
  },
  screen: {
    paddingLeft: 16,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
  },
});

export default withTheme(ProfileScreen);
