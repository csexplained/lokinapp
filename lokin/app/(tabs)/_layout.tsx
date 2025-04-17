import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, Image, StyleSheet } from "react-native";
import { BriefcaseIcon, BookmarkIcon, ChatIcon } from "@/assets/icons/iconsheader";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HapticTab } from "@/components/HapticTab";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = "#FFFFFF";
  const inactiveColor = colorScheme === 'dark' ? '#ffffff' : '#ffffff';
  const iconBgColor = colorScheme === 'dark' ? '#1D1D1D' : '#E9E9E9';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,

        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowColor: 'transparent',
          height: 70, // ⬆️ increased
          overflow: 'visible', // ✅ allow icons to overflow a bit
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        },

        tabBarBackground: () => (
          <BlurView
            intensity={30}
            tint={colorScheme === 'dark' ? 'dark' : 'light'}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: Platform.OS === 'ios' ? 15 : 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
              <BriefcaseIcon
                width={20}
                height={20}
                color={focused ? activeColor : inactiveColor}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
              <BookmarkIcon
                width={20}
                height={20}
                color={focused ? activeColor : inactiveColor}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
              <ChatIcon
                width={20}
                height={20}
                color={focused ? activeColor : inactiveColor}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.imageContainer, { backgroundColor: iconBgColor }]}>
              <Image
                source={require("@/assets/images/image.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: focused ? activeColor : inactiveColor,
                }}
                resizeMode="cover"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});