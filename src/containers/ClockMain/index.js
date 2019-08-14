import React, { Fragment, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import Geolocation from "@react-native-community/geolocation";

import I18n from "i18n-js";

import { getMapData } from "../../api";

import { SETTINGS_SCREEN } from "../../navigator/routes";

const personIcon = "https://via.placeholder.com/10";

const getCurrentTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let timeType;
  if (hour <= 11) {
    timeType = "A.M";
  } else {
    timeType = "P.M";
  }
  if (hour > 12) {
    hour -= 12;
  }

  if (hour === 0) {
    hour = 12;
  }

  const currentTime = `${hour} : ${minutes}`;
  return {
    currentTime,
    timeType
  };
};

const settingRange = "1m";
const OUT_OF_RANGE = "Out of Range";
const CLOCK_IN = "Clock In";
const CLOCK_OUT = "Clock Out";

const distantStatus = [
  {
    key: 1,
    status: OUT_OF_RANGE
  },
  {
    key: 2,
    status: CLOCK_IN
  },
  {
    key: 3,
    status: CLOCK_OUT
  }
];

const StatusButton = ({ status }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        borderWidth: 5,
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={() => {}}
    >
      <Text style={{ fontSize: 20 }}>{status}</Text>
    </TouchableOpacity>
  );
};

const getGpsStatus = true;

const GpsTrackingItem = ({ currentDate, locationAddress }) => {
  return (
    <View>
      <Text>{currentDate.toString()}</Text>
      <Text>{locationAddress}</Text>
    </View>
  );
};

const ClockMain = ({ navigation }) => {
  const timeAndAddressList = [
    {
      key: "1",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    },
    {
      key: "2",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    },
    {
      key: "3",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    },
    {
      key: "4",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    },
    {
      key: "5",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    },
    {
      key: "6",
      currentDate: new Date(),
      locationAddress: "83 Uisadong-daero, Yeoeuido-dong, Seoul"
    }
  ];

  const [currentPosition, setCurrentPosition] = useState({
    latitude: "",
    longitude: "",
    status: OUT_OF_RANGE,
    locationList: timeAndAddressList
  });

  const swingvyLatitude = 127.03660330000001;
  const swingvyLongitude = 37.4852588;

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const { coords } = info;
      const { latitude, longitude } = coords;
      console.log({ latitude, longitude });
      getMapData({
        longitude: longitude,
        latitude: latitude
      }).then(mapInfo => {
        console.log(mapInfo);
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude
        });
      });
    });
  }, []);

  const getGpsStatusText = getGpsStatus
    ? I18n.t("gpsEnabled")
    : I18n.t("gpsNotEnabled");
  const { currentTime, timeType } = getCurrentTime();

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <TouchableOpacity
            style={{ position: "absolute", left: 20, top: 20 }}
            onPress={() => navigation.navigate(SETTINGS_SCREEN)}
          >
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 20 }}
            onPress={() => navigation.navigate(SETTINGS_SCREEN)}
          >
            <Text>Change locale</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              borderWidth: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 50 }}>{currentTime}</Text>
            <Text style={{ fontSize: 20 }}>{timeType}</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", marginLeft: 20, marginBottom: 20 }}
        >
          <Text>{getGpsStatusText}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <View>
            <Text>Current position</Text>
            <Text>Latitude: {currentPosition.latitude}</Text>
            <Text>Longitude: {currentPosition.longitude}</Text>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Image
              style={{ width: 10, height: 30 }}
              source={{
                uri: personIcon
              }}
            />
          </View>
          <View>
            <Text>You are 10 meter</Text>
            <Text>away from office</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30
          }}
        >
          <StatusButton status={currentPosition.status} />
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, flex: 1 }}>
          <Text style={{ marginBottom: 20 }}>Recent clocking history</Text>
          <FlatList
            data={currentPosition.locationList}
            renderItem={({ item }) => <GpsTrackingItem {...item} />}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default ClockMain;
