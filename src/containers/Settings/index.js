import React, { Fragment } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from "react-native";
import Slider from "@react-native-community/slider";

import { CLOCK_MAIN_SCREEN } from "../../navigator/routes";
import I18n from "i18n-js";

const imageUrl = "https://via.placeholder.com/150";

const Settings = ({ navigation }) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate(CLOCK_MAIN_SCREEN)}
            >
              <Text style={{ fontSize: 20 }}>Back</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Settings</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: imageUrl
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ marginBottom: 20 }}>Office address</Text>
              <Text style={{ marginBottom: 20 }}>
                서울시 강남구 남부순환로 2621 {"\n"}
                서브원 강남빌딩
              </Text>
              <Text>@37.4852655,127.0367026</Text>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
          <TextInput placeholder={"Set clock in range"} />
        </View>
        <View style={{ marginLeft: 20, marginBottom: 20 }}>
          <Text>Range in M</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default Settings;
