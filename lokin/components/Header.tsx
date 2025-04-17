import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const Header = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    // Theme colors
    const bgColor = isDark ? '#161616' : 'rgba(255, 255, 255, 0.9)';
    const textColor = isDark ? '#FFF' : '#000';
    const iconColor = isDark ? '#FFF' : '#000';
    const dropdownBg = isDark ? '#000' : '#FFF';
    const dropdownTextColor = isDark ? '#FFF' : '#000';

    const [selectedTab, setSelectedTab] = useState('Startup');
    const [isFocus, setIsFocus] = useState(false);

    const tabs = [
        { label: 'Startup', value: 'Startup' },
        { label: 'News', value: 'News' },
        { label: 'Feed', value: 'Feed' },
        { label: 'Profile', value: 'Profile' },
    ];

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <View style={styles.headerRow}>
                {/* Logo */}
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Dropdown Select */}
                <View style={styles.dropdownContainer}>
                    <Dropdown
                        style={[
                            styles.dropdown,
                            isFocus && { borderColor: isDark ? '#4CAF50' : '#2E7D32' },
                            { backgroundColor: dropdownBg }
                        ]}
                        placeholderStyle={[styles.placeholderStyle, { color: dropdownTextColor }]}
                        selectedTextStyle={[styles.selectedTextStyle, { color: dropdownTextColor }]}
                        itemTextStyle={{ color: dropdownTextColor }}
                        data={tabs}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select tab' : '...'}
                        value={selectedTab}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setSelectedTab(item.value);
                            setIsFocus(false);
                        }}
                        renderRightIcon={() => (
                            <Ionicons
                                name={isFocus ? 'chevron-up' : 'chevron-down'}
                                size={20}
                                color={iconColor}
                                style={styles.dropdownIcon}
                            />
                        )}
                    />
                </View>

                {/* Action Icons */}
                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: isDark ? '#000' : '#EEE' }]}>
                        <Ionicons name="search" size={20} color={iconColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.iconButton, { backgroundColor: isDark ? '#000' : '#EEE' }]}>
                        <Ionicons name="notifications-outline" size={20} color={iconColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 12,
        position: 'absolute',
        backgroundColor: "transprent",
        top: 0,
        left: 0,
        zIndex: 100,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 70,
        height: 30,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    dropdown: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 20,
        paddingLeft: 12,
        paddingHorizontal: 5,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    dropdownIcon: {
        marginRight: 8,
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;