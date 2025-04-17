import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SocialCardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    topTitle?: string; // New prop for the top title/designation
    onLike: () => void;
    onShare: () => void;
    onSave: () => void;
    likeCount: number;
    isLiked?: boolean;
}

const SocialCard: React.FC<SocialCardProps> = ({
    imageUrl,
    title,
    subtitle,
    description,
    topTitle,
    onLike,
    onShare,
    onSave,
    likeCount,
    isLiked = false,
}) => {
    const colorScheme = useColorScheme();
    const dominantColor = ''; // Example fallback color
    const actionBarBg = colorScheme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)';
    const actionIconColor = colorScheme === 'dark' ? '#FFF' : '#000';
    const actioniconbg = colorScheme === 'dark' ? '#2B2A2A' : '#E9E9E9'
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.cardBackground}
                imageStyle={styles.cardImageStyle}
                blurRadius={5}
            >
                {/* Overlay with dominant color */}
                <View style={[styles.overlay, { backgroundColor: `${dominantColor}80` }]} />

                {/* Card content */}
                <View style={styles.cardContent}>
                    {/* Header section */}
                    <View style={styles.header}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.avatar}
                                resizeMode="contain"

                            />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                    </View>
                    {/* Action bar */}
                    <View style={styles.actionBar}>
                        <View style={[styles.actionBar2, { backgroundColor: actionBarBg }]}>
                            <TouchableOpacity onPress={onLike} style={[styles.actionButton, { backgroundColor: actioniconbg }]}>
                                <Ionicons
                                    name={isLiked ? "heart" : "heart-outline"}
                                    size={24}
                                    color={isLiked ? "#FF5252" : actionIconColor}
                                />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={onShare} style={[styles.actionButton, { backgroundColor: actioniconbg }]}>
                                <Ionicons name="share-social-outline" size={24} color={actionIconColor} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onSave} style={[styles.actionButton, { backgroundColor: actioniconbg }]}  >
                                <Ionicons name="bookmark-outline" size={24} color={actionIconColor} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View>
                        {/* Description */}
                        <Text style={[styles.topTitle, { color: colorScheme === 'dark' ? '#FFF' : '#000' }]}>
                            {topTitle}
                        </Text>
                        <Text style={[styles.description, { color: colorScheme === 'dark' ? '#FFF' : '#000' }]} numberOfLines={3}>
                            {description}
                        </Text>
                    </View>


                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        borderColor: "#fff",
        borderWidth: 0.3,
        width: "auto",
        height: "auto", // Increased card height
    },
    cardBackground: {
        width: '100%',
        height: '100%',
    },
    cardImageStyle: {
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    cardContent: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        backgroundColor: '#00000080',
        borderWidth: 2,
    },
    headerText: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
    },
    topTitle: {
        fontSize: 20,
        marginBottom: 4,
        fontWeight: '600',
        textAlign: 'left',
        borderRadius: 8,
    },
    description: {
        fontSize: 12,
        lineHeight: 15,
        marginBottom: 5,
        borderRadius: 12,
    },
    actionBar: {
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 5,
        borderRadius: 20,
        marginTop: 8,
    },
    actionBar2: {
        flexDirection: 'column',
        gap: 12,
        padding: 2,
        borderColor: "#fff",
        borderWidth: 0.3,
        borderRadius: 30,
        marginTop: 8,
    },
    actionButton: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 35,
    },
    actionCount: {
        marginLeft: 4,
        fontSize: 14,
    },
});

export default SocialCard;