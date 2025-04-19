import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    useColorScheme,
    Dimensions
} from 'react-native';
import { router } from 'expo-router';

interface UsercardsProps {
    id: string
    name: string
    status: string
    lastMessage?: string
    time: string
    unreadCount?: number
    isOnline: boolean
    avatar: string
}
const Usercard = ({ id, name, status, lastMessage, time, unreadCount = 0, isOnline, avatar }: UsercardsProps) => {
    const colorScheme = useColorScheme();
    const themeStyles = {
        container: {
            backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
        },
        header: {
            backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#F5F5F5',
        },
        headerText: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        messageCard: {
            backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
            borderColor: colorScheme === 'dark' ? '#fff' : '#EEE',
        },
        nameText: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        statusText: {
            color: colorScheme === 'dark' ? '#AAAAAA' : '#ffffff',
        },
        lastMessage: {
            color: colorScheme === 'dark' ? '#CCCCCC' : '#444444',
        },
        timeText: {
            color: colorScheme === 'dark' ? '#ffffff' : '#666666',
        },
        unreadBadge: {
            backgroundColor: '#00FF9C',
        },
        onlineDot: {
            backgroundColor: '#4CAF50',
        },
        actionButton: {
            backgroundColor: colorScheme === 'dark' ? '#333' : '#000',
        },
    };

    return (
        <TouchableOpacity
            key={id}
            style={[styles.messageCard, themeStyles.messageCard]}
            onPress={() => router.push("/Messages/Index")}
        >
            {/* Avatar with status */}
            <View style={styles.avatarContainer}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                {isOnline && (
                    <View style={[styles.onlineDot, themeStyles.onlineDot]} />
                )}
                <Text style={[styles.statusText, themeStyles.statusText]}>
                    {status}
                </Text>
            </View>

            {/* Message content */}
            <View style={styles.messageContent}>
                <Text style={[styles.nameText, themeStyles.nameText]}>
                    {name}
                </Text>
                <Text
                    style={[styles.lastMessage, themeStyles.lastMessage]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {lastMessage}
                </Text>
            </View>

            {/* Time and unread count */}
            <View style={styles.timeContainer}>

                {(unreadCount ?? 0) > 0 && (
                    <View style={[styles.unreadBadge, themeStyles.unreadBadge]}>
                        <Text style={styles.unreadText}>{unreadCount}</Text>
                    </View>
                )}
                <Text style={[styles.timeText, themeStyles.timeText]}>
                    {time}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuButton: {
        padding: 8,
        borderRadius: 20,
    },
    content: {
        flex: 1,
    },
    messageCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 6,
        borderRadius: 20,
        borderWidth: 0.3,
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 15,
        width: 60,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    onlineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#FFF',
        position: 'absolute',
        top: 0,
        right: 10,
    },
    statusText: {
        position: "absolute",
        bottom: "auto",
        backgroundColor: "#000000",
        marginTop: 2,
        fontSize: 11,
        padding: 1,
        borderRadius: 10
    },
    messageContent: {
        flex: 1,
        marginRight: 10,
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,
    },
    lastMessage: {
        fontSize: 14,
    },
    timeContainer: {
        alignItems: 'flex-end',
    },
    timeText: {
        fontSize: 12,

    },
    unreadBadge: {
        marginBottom: 8,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    menuContainer: {
        position: 'absolute',
        top: 70,
        right: 15,
        borderRadius: 8,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 100,
    },
    menuItem: {
        padding: 10,
    },
    menuItemText: {
        fontSize: 14,
    },
});

export default Usercard;