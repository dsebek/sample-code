import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  ButtonOutline,
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PropertyDetailScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={false}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET
        method={'GET'}
        id={props.route?.params?.id ?? 2}
      >
        {({ loading, error, data, refetchIndividualProperty }) => {
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
              <View style={styles.Viewf6}>
                <ImageBackground
                  style={styles.ImageBackgroundDO}
                  source={{ uri: `${data && data['image_url']}` }}
                  resizeMode={'cover'}
                >
                  <View style={styles.ViewFf}>
                    <View
                      style={[
                        styles.ViewVi,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <View style={styles.ViewUv}>
                        <Text
                          style={[
                            styles.Text_7d,
                            { color: theme.colors.surface },
                          ]}
                        >
                          {'Only $'}
                          {fetchData?.nightly_price}
                          {' per night'}
                        </Text>
                      </View>

                      <View>
                        <ButtonOutline
                          style={[
                            styles.ButtonOutlinedI,
                            {
                              borderColor: theme.colors.surface,
                              color: theme.colors.surface,
                            },
                          ]}
                          title={'BOOK'}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.ViewsF}>
                  <Text style={[styles.TexthX, { color: theme.colors.light }]}>
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={[styles.Text_35, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.Viewv5}>
                      <View
                        style={[
                          styles.Viewa7,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialCommunityIcons/bed-king'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextEq,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.Viewya,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/bathtub'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextSr,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.bathrooms}
                          {' baths'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.ViewAD,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/group'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextHa,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.maxGuests}
                          {' max'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.Text_6l, { color: theme.colors.strong }]}
                    >
                      {'Rates'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.View_2i}>
                      <View style={styles.Viewfq}>
                        <Text
                          style={[
                            styles.TextUd,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Nightly'}
                        </Text>
                      </View>

                      <View style={styles.View_76}>
                        <Text
                          style={[
                            styles.Text_4s,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.nightly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.Divideryr}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.Viewh1}>
                      <View style={styles.ViewJ3}>
                        <Text
                          style={[
                            styles.TextaH,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Weekly'}
                        </Text>
                      </View>

                      <View style={styles.Viewzu}>
                        <Text
                          style={[
                            styles.TextOb,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.weekly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividercZ}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewDe}>
                      <View style={styles.ViewAq}>
                        <Text
                          style={[
                            styles.TextlF,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Monthly'}
                        </Text>
                      </View>

                      <View style={styles.ViewOi}>
                        <Text
                          style={[
                            styles.TextNE,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.monthly_rental_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextgH, { color: theme.colors.strong }]}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.TextBc, { color: theme.colors.medium }]}
                    >
                      {fetchData?.description}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextRI, { color: theme.colors.strong }]}
                    >
                      {'More'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.Viewjk}>
                      <View style={styles.View_80}>
                        <Text
                          style={[
                            styles.TextzV,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cancellation'}
                        </Text>
                      </View>

                      <View style={styles.ViewCD}>
                        <Text
                          style={[
                            styles.TextTn,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cancellation_policy}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerRz}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.View_9Q}>
                      <View style={styles.ViewAT}>
                        <Text
                          style={[
                            styles.Textmq,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Minimum stay'}
                        </Text>
                      </View>

                      <View style={styles.ViewRf}>
                        <>
                          {!fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Text_4s,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {fetchData?.min_stay}
                            </Text>
                          )}
                        </>
                        <>
                          {fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Text_47,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'No minimum'}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividergM}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewQT}>
                      <View style={styles.ViewLz}>
                        <Text
                          style={[
                            styles.Textcy,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cleaning fee'}
                        </Text>
                      </View>

                      <View style={styles.Viewwl}>
                        <Text
                          style={[
                            styles.Text_1U,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cleaning_fee}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                  <View>
                    <ButtonSolid
                      onPress={async () => {
                        try {
                          await WebBrowser.openBrowserAsync(
                            `https://www.google.com/maps/@${fetchData?.latitude},${fetchData?.longitude},18z`
                          );
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={[
                        styles.ButtonSolidHH,
                        { backgroundColor: theme.colors.primary },
                      ]}
                      title={'View on Map'}
                    />
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_7d: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  ViewUv: {
    flex: 1,
  },
  ButtonOutlinedI: {
    borderRadius: 8,
    fontFamily: 'Poppins_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  ViewVi: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 8,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewFf: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ImageBackgroundDO: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  Viewf6: {
    width: '100%',
    height: 420,
  },
  TexthX: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Text_35: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  TextEq: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewa7: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    justifyContent: 'center',
  },
  TextSr: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewya: {
    flexDirection: 'row',
    flex: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  TextHa: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewAD: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },
  Viewv5: {
    flexDirection: 'row',
  },
  Text_6l: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextUd: {
    fontFamily: 'Poppins_400Regular',
  },
  Viewfq: {
    flex: 1,
  },
  Text_4s: {
    fontFamily: 'Poppins_500Medium',
  },
  View_76: {
    flex: 1,
  },
  View_2i: {
    flexDirection: 'row',
  },
  Divideryr: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextaH: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewJ3: {
    flex: 1,
  },
  TextOb: {
    fontFamily: 'Poppins_500Medium',
  },
  Viewzu: {
    flex: 1,
  },
  Viewh1: {
    flexDirection: 'row',
  },
  DividercZ: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextlF: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewAq: {
    flex: 1,
  },
  TextNE: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewOi: {
    flex: 1,
  },
  ViewDe: {
    flexDirection: 'row',
  },
  TextgH: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextBc: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  TextRI: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextzV: {
    fontFamily: 'Poppins_400Regular',
  },
  View_80: {
    flex: 1,
  },
  TextTn: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewCD: {
    flex: 1,
  },
  Viewjk: {
    flexDirection: 'row',
  },
  DividerRz: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Textmq: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewAT: {
    flex: 1,
  },
  Text_4s: {
    fontFamily: 'Poppins_500Medium',
  },
  Text_47: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewRf: {
    flex: 1,
  },
  View_9Q: {
    flexDirection: 'row',
  },
  DividergM: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Textcy: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewLz: {
    flex: 1,
  },
  Text_1U: {
    fontFamily: 'Poppins_500Medium',
  },
  Viewwl: {
    flex: 1,
  },
  ViewQT: {
    flexDirection: 'row',
  },
  ButtonSolidHH: {
    borderRadius: 8,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewsF: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PropertyDetailScreen);
