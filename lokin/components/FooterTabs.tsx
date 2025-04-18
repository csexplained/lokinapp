import React from "react";
import { Platform, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BriefcaseIcon, BookmarkIcon, ChatIcon } from "@/assets/icons/iconsheader";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const FooterTabs = () => {
    const colorScheme = useColorScheme();
    const activeColor = "#FFFFFF";
    const inactiveColor = colorScheme === "dark" ? "#ffffff" : "#ffffff";
    const iconBgColor = colorScheme === "dark" ? "#1D1D1D" : "#E9E9E9";

    return (
        <View style={styles.footerWrapper}>
            <BlurView intensity={30} tint={colorScheme === "dark" ? "dark" : "light"} style={StyleSheet.absoluteFill} />

            <View style={styles.tabRow}>
                <TouchableOpacity onPress={() => router.push("/")} style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                    <BriefcaseIcon width={20} height={20} color={activeColor} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/info")} style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                    <BookmarkIcon width={20} height={20} color={inactiveColor} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/messages")} style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                    <ChatIcon width={20} height={20} color={inactiveColor} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/profile")} style={[styles.imageContainer, { backgroundColor: iconBgColor }]}>
                    <Image
                        source={require("@/assets/images/image.png")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            borderWidth: 2,
                            borderColor: activeColor,
                        }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerWrapper: {
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 100,
    },
    tabRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: Platform.OS === "ios" ? 20 : 10,
        height: "100%",
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FooterTabs;
