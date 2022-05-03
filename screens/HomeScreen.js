import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Texta4, { color: theme.colors.strong }]}>
        {'Popular Rentals'}
      </Text>

      <ExamplePropertiesApi.FetchListOfPropertiesGET method={'GET'} limit={12}>
        {({ loading, error, data, refetchListOfProperties }) => {
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
            <FlatList
              data={fetchData}
              listKey={'W3mZkj1u'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View
                      style={[
                        styles.ViewSr,
                        {
                          backgroundColor: theme.colors.surface,
                          borderRadius: 8,
                          borderColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ScreenStack', {
                              screen: 'PropertyDetailScreen',
                              params: { id: listData?.id },
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles.ViewNb}>
                          <ImageBackground
                            style={[
                              styles.ImageBackground_8T,
                              { borderRadius: theme.roundness },
                            ]}
                            resizeMode={'cover'}
                            source={{ uri: `${listData?.image_url}` }}
                          >
                            <View style={styles.Viewpb}>
                              <View
                                style={[
                                  styles.ViewJe,
                                  {
                                    backgroundColor: theme.colors.primary,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 8,
                                  },
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.TextB4,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'$'}
                                  {listData?.nightly_price}
                                </Text>

                                <Text
                                  style={[
                                    styles.TextXp,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'/night'}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.ViewFP}>
                          <View>
                            <Text
                              style={[
                                styles.TextRm,
                                { color: theme.colors.strong },
                              ]}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.name}
                            </Text>
                            <Spacer top={4} right={8} bottom={4} left={8} />
                            <Text
                              style={[
                                styles.Textcc,
                                { color: theme.colors.medium },
                              ]}
                              ellipsizeMode={'tail'}
                              numberOfLines={2}
                            >
                              {listData?.description}
                            </Text>
                            <Divider
                              style={styles.Dividert0}
                              color={theme.colors.divider}
                            />
                            <View style={styles.View_9b}>
                              <View style={styles.Viewdw}>
                                <Icon
                                  name={'MaterialCommunityIcons/bed-king'}
                                  size={24}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.Text_6D,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.beds}
                                  {' beds'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.View_8i}>
                                <Icon
                                  name={'MaterialIcons/bathtub'}
                                  size={20}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.TextfW,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.bathrooms}
                                  {' baths'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.ViewT3}>
                                <Icon
                                  name={'MaterialIcons/group'}
                                  size={24}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.Textjx,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.maxGuests}
                                  {' guests'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              contentContainerStyle={styles.FlatListW3Content}
            />
          );
        }}
      </ExamplePropertiesApi.FetchListOfPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Texta4: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  TextB4: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextXp: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewJe: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewpb: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  ImageBackground_8T: {
    width: '100%',
    height: '100%',
  },
  ViewNb: {
    height: 240,
  },
  TextRm: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
  },
  Textcc: {
    lineHeight: 24,
  },
  Dividert0: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Text_6D: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewdw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextfW: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View_8i: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textjx: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewT3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_9b: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewFP: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewSr: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  FlatListW3Content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default withTheme(HomeScreen);
