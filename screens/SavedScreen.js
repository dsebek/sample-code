import React from 'react';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import {
  ButtonSolid,
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

const SavedScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [showList, setShowList] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Textvk, { color: theme.colors.strong }]}>
        {'Saved Rentals'}
      </Text>

      <View style={styles.Viewvn}>
        <View
          style={[
            styles.ViewLr,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 14,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.ViewoV}>
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid_34,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
            <>
              {!showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidKb,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
          </View>

          <View style={styles.VieweG}>
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidCM,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'List'}
                />
              )}
            </>
            <>
              {showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolid_9N,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'List'}
                />
              )}
            </>
          </View>
        </View>
      </View>

      <ExampleSavedPropertiesApi.FetchSavedPropertiesGET
        method={'GET'}
        limit={16}
      >
        {({ loading, error, data, refetchSavedProperties }) => {
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
              <>
                {showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'4ZnenEHs'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const gridData = item;
                      return (
                        <View style={styles.Viewps}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('ScreenStack', {
                                  screen: 'PropertyDetailScreen',
                                  params: { id: gridData?.propertiesId },
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={[
                                styles.ViewhA,
                                {
                                  borderRadius: 12,
                                  borderColor: theme.colors.divider,
                                  backgroundColor: theme.colors.surface,
                                },
                              ]}
                            >
                              <View style={styles.ViewQk}>
                                <ImageBackground
                                  style={styles.ImageBackgroundfE}
                                  source={{
                                    uri: `${gridData?.properties?.image_url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.Viewt0}>
                                <Text
                                  style={[
                                    styles.TextBp,
                                    { color: theme.colors.strong },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {gridData?.properties?.name}{' '}
                                </Text>

                                <View style={styles.ViewL9}>
                                  <Text
                                    style={[
                                      styles.Text_4l,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'$'}
                                    {gridData?.properties?.nightly_price}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Textdm,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'/night'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatList_4ZContent}
                    numColumns={2}
                  />
                )}
              </>
              <>
                {!showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'h1O2IyvK'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          <View style={styles.ViewHO}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('ScreenStack', {
                                    screen: 'PropertyDetailScreen',
                                    params: { id: listData?.propertiesId },
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={[
                                  styles.View_0S,
                                  {
                                    borderRadius: 12,
                                    borderColor: theme.colors.divider,
                                    backgroundColor: theme.colors.surface,
                                  },
                                ]}
                              >
                                <View style={styles.Viewxc}>
                                  <ImageBackground
                                    style={styles.ImageBackgroundlD}
                                    source={{
                                      uri: `${listData?.properties?.image_url}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <View style={styles.Viewfe}>
                                  <Text
                                    style={[
                                      styles.Textm1,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.properties?.city}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Textbp,
                                      { color: theme.colors.strong },
                                    ]}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                  >
                                    {listData?.properties?.name}{' '}
                                  </Text>

                                  <View style={styles.ViewkD}>
                                    <Text
                                      style={[
                                        styles.Textwr,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'$'}
                                      {listData?.properties?.nightly_price}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Texthr,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'/night'}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </Touchable>
                          </View>
                          <Spacer top={8} right={8} bottom={8} left={8} />
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListh1Content}
                  />
                )}
              </>
            </>
          );
        }}
      </ExampleSavedPropertiesApi.FetchSavedPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textvk: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ButtonSolid_34: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidKb: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewoV: {
    flex: 1,
  },
  ButtonSolidCM: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolid_9N: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  VieweG: {
    flex: 1,
  },
  ViewLr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewvn: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageBackgroundfE: {
    width: '100%',
    height: '100%',
  },
  ViewQk: {
    height: 140,
  },
  TextBp: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  Text_4l: {
    fontFamily: 'Poppins_600SemiBold',
  },
  Textdm: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewL9: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewt0: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  ViewhA: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewps: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  FlatList_4ZContent: {
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  ImageBackgroundlD: {
    width: '100%',
    height: '100%',
  },
  Viewxc: {
    flex: 1,
  },
  Textm1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  Textbp: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  Textwr: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  Texthr: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewkD: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewfe: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  View_0S: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewHO: {
    flex: 1,
  },
  FlatListh1Content: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default withTheme(SavedScreen);
