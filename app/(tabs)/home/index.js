import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router=useRouter()
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FEBE10", height: 200, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Image
            source={{
              uri: "https://laundrymate.in/assets/images/shared/branding/Logo.webp",
            }}
            style={{ width: 200, height: 50, resizeMode: "cover" }}
          />

          <Octicons name="three-bars" size={24} color="white" />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontFamily: "Kailasa-Bold", fontSize: 13 }}>
              Hi Harsh
            </Text>
            <Text
              style={{
                fontFamily: "Kailasa-Bold",
                fontSize: 13,
                color: "#fff",
              }}
            >
              Home | Pune - 411028
            </Text>
          </View>

          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />

            <Text
              style={{
                fontSize: 12,
                fontFamily: "KohinoorTelugu-Medium",
                color: "#0066b2",
              }}
            >
              Quick Help
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 10,
          borderRadius: 10,
          width: 340,
          position: "absolute",
          top: 150,
          left: "50%",
          transform: [{ translateX: -170 }],
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 15,
                color: "#0066b2",
                fontFamily: "Kailasa-Bold",
              }}
            >
              Quick Order
            </Text>

            <Text style={{ marginTop: 4 }}>
              Book a pickup and a delivery option
            </Text>
            <Text>We will be at your doorstep on time</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable
              onPress={()=>router.push("/home/address")}
                style={{
                  backgroundColor: "#FEBE10",
                  borderRadius: 5,
                  marginTop: 10,
                  padding: 8,
                  width: 100,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  Book Now
                </Text>
              </Pressable>
              <MaterialCommunityIcons name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 90,
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginHorizontal: 15,
        }}
      >
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 12 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>
              <Text
                style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}
              >
                Club <Text style={{ color: "#034694" }}>Ultimate</Text>
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 10,
                }}
              >
                Put your laundry on Cruise Control
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                  width: 130,
                  marginTop: 4,
                }}
              >
                Subscribe and get benefits
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 10,
            marginRight: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <View>
              <Text
                style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}
              >
                Place Your <Text style={{ color: "#034694" }}>Order</Text>
              </Text>

              <Text
                style={{
                  width: 130,
                  fontSize: 12,
                  fontWeight: "300",
                  marginTop: 10,
                }}
              >
                Select items from the catalogue below
              </Text>
              <Text
                style={{
                  width: 130,
                  fontSize: 12,
                  fontWeight: "300",
                  marginTop: 6,
                }}
              >
                and book your order. It's about time
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          // alignItems: "center",
          gap: 10,
          marginHorizontal: 15,
          marginVertical: 10,
          // backgroundColor:'red'
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "white",
              padding: 12,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  color: "#034694",
                  width: 130,
                }}
              >
                Affordable Prices
              </Text>
              <Text style={{ marginTop: 5 }}>Get out price list</Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 12,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  color: "#034694",
                  width: 130,
                }}
              >
                Affordable Prices
              </Text>
              <Text style={{ marginTop: 5 }}>Get out price list</Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            gap: 10,
            padding: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FEBE10",
                  width: 100,
                  fontWeight: "bold",
                }}
              >
                WHAT's THE PLAN
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: "#034694",
                  width: 100,
                  fontWeight: "bold",
                }}
              >
                FOR THE PLANET
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>
      </View>

      <View style={{ marginLeft: "auto", marginRight: "auto" }}>
        <View
          style={{ backgroundColor: "white", padding: 12, borderRadius: 12 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text>Next Available</Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginTop: 5,
                color: "#034694",
                width: 150,
                textAlign: "center",
              }}
            >
              Order Within 15 mins to catch this pickUp Slot
            </Text>
          </View>

          <Pressable
            style={{
              borderWidth: 0.7,
              borderColor: "#034694",
              borderRadius: 5,
              padding: 5,
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 5,
              marginTop: 5,
            }}
          >
            <Text>ADD ITEMS</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
