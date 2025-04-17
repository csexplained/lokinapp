import cardData from "@/data/carddata";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

const SocialCard: React.FC = () => {
  const {
    imageUrl,
    title,
    subtitle,
    description,
    topTitle,
    likeCount,
    isLiked = false,
  } = cardData[0];

  const onLike = async () => {
    // Like functionality
  };

  const onShare = async () => {
    // Share functionality
  };

  const onSave = async () => {
    // Save functionality
  };

  const colorScheme = useColorScheme();
  const dominantColor = ""; // fallback color
  const actionBarBg =
    colorScheme === "dark"
      ? "rgba(30, 30, 30, 0.8)"
      : "rgba(255, 255, 255, 0.8)";
  const actionIconColor = colorScheme === "dark" ? "#FFF" : "#000";
  const actioniconbg = colorScheme === "dark" ? "#2B2A2A" : "#E9E9E9";
  const textColor = colorScheme === "dark" ? "#FFF" : "#000";
  const secondaryTextColor =
    colorScheme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";
  const tagBg = colorScheme === "dark" ? "#000" : "#E9E9E9";
  const tagText = colorScheme === "dark" ? "#FFF" : "#000";
  const dividerColor =
    colorScheme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)";
  const tabBg = colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5";
  const inputBg = colorScheme === "dark" ? "#2B2B2B" : "#F0F0F0";
  const buttonBg = colorScheme === "dark" ? "#FFF" : "#000";
  const buttonText = colorScheme === "dark" ? "#000" : "#FFF";

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF' }]}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Image with header overlay */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.cardImage}
            resizeMode="cover"
          >
            {/* Overlay for better text visibility */}
            <View style={styles.imageOverlay} />

            {/* Header positioned at top of image */}
            <View style={[styles.header, { paddingTop: StatusBar.currentHeight || 16 }]}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.headerText}>
                <Text style={[styles.title, { color: '#FFF' }]}>{title}</Text>
                <Text style={[styles.subtitle, { color: 'rgba(255,255,255,0.8)' }]}>{subtitle}</Text>
              </View>
            </View>

            {/* Absolute positioned action buttons on right side */}
            <View style={[styles.actionBar, { backgroundColor: actionBarBg }]}>
              <TouchableOpacity
                onPress={onLike}
                style={[
                  styles.actionButton,
                  { backgroundColor: actioniconbg },
                ]}
              >
                <Ionicons
                  name={isLiked ? "heart" : "heart-outline"}
                  size={20}
                  color={isLiked ? "#FF5252" : actionIconColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onShare}
                style={[
                  styles.actionButton,
                  { backgroundColor: actioniconbg },
                ]}
              >
                <Ionicons
                  name="share-social-outline"
                  size={20}
                  color={actionIconColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onSave}
                style={[
                  styles.actionButton,
                  { backgroundColor: actioniconbg },
                ]}
              >
                <Ionicons
                  name="bookmark-outline"
                  size={20}
                  color={actionIconColor}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Content starting from middle of image */}
        <View style={styles.contentContainer}>
          {/* Main content */}
          <View style={styles.textContent}>
            <Text style={[styles.topTitle, { color: textColor }]}>
              {topTitle}
            </Text>
            <Text
              style={[styles.description, { color: textColor }]}
            >
              {description}
            </Text>

            <View style={styles.tagsContainer}>
              {["#startup", "#technology", "#cybersecurity"].map((tag) => (
                <View
                  key={tag}
                  style={[styles.tag, { backgroundColor: tagBg }]}
                >
                  <Text style={[styles.tagText, { color: tagText }]}>
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View
            style={[styles.divider, { backgroundColor: dividerColor }]}
          />

          {/* Metadata Section */}
          <View style={styles.metadataContainer}>
            <View className="flex flex-row justify-items-center">
              <View className="w-1/2 gap-2 my-2">
                <View style={styles.metadataItem}>
                  <Ionicons
                    name="folder-outline"
                    size={14}
                    color={secondaryTextColor}
                  />
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Category: Tech
                  </Text>
                </View>
                <View style={styles.metadataItem}>
                  <Ionicons
                    name="folder-outline"
                    size={14}
                    color={secondaryTextColor}
                  />
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Category: Tech
                  </Text>
                </View>
                <View style={styles.metadataItem}>
                  <Ionicons
                    name="folder-outline"
                    size={14}
                    color={secondaryTextColor}
                  />
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Category: Tech
                  </Text>
                </View>
              </View>
              <View className="w-1/2 flex items-end gap-2 my-2">
                <View className="bg-[#202020] gap-2 rounded-3xl w-36 text-white flex-row p-2">
                  <Ionicons
                    name="people"
                    size={18}
                    color={secondaryTextColor}
                  />
                  <Text className="text-white">
                    Team Size: 1
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.metadataRow}>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="folder-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Category: Tech
                </Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="person-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Created by: Admin
                </Text>
              </View>
            </View>
            <View style={styles.metadataRow}>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="folder-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Category: <Text className="dark:text-white text-black ">Tech</Text>
                </Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="person-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Created by: Admin
                </Text>
              </View>
            </View>
            <View style={styles.metadataRow}>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="calendar-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Posted: 2 days ago
                </Text>
              </View>
              <View style={styles.metadataItem}>
                <Ionicons
                  name="people-outline"
                  size={14}
                  color={secondaryTextColor}
                />
                <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                  Team size: 5
                </Text>
              </View>
            </View>
          </View>

          {/* Apply Button */}
          <TouchableOpacity
            style={[
              styles.applyButton,
              { backgroundColor: buttonBg },
            ]}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.applyButtonText,
                { color: buttonText },
              ]}
            >
              Apply for Senior Cybersecurity Engineer Role
            </Text>
          </TouchableOpacity>

          <View
            style={[styles.divider, { backgroundColor: dividerColor }]}
          />

          {/* Tabs Section */}
          <View style={styles.tabsContainer}>
            {["Details", "Team Members", "Comments (12)"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, { backgroundColor: tabBg }]}
                activeOpacity={0.7}
              >
                <Text style={[styles.tabText, { color: textColor }]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Comment Input */}
          <View style={[styles.commentContainer, { backgroundColor: inputBg }]}>
            <TextInput
              style={[styles.commentInput, { color: textColor }]}
              placeholder="Write a comment..."
              placeholderTextColor={secondaryTextColor}
            />
            <TouchableOpacity
              style={styles.commentButton}
              activeOpacity={0.7}
            >
              <Ionicons name="send-outline" size={20} color={actionIconColor} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  imageContainer: {
    height: height * 0.8, // 50% of screen height for image
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start', // Align header to top
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
  },
  actionBar: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -50 }],
    flexDirection: 'column',
    gap: 16,
    padding: 12,
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionCount: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
  },
  contentContainer: {
    marginTop: -height * 0.4, // Pull up to overlap with image
    backgroundColor: 'transparent',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  textContent: {
    backgroundColor: 'transparent',
    paddingTop: height * 0.1, // Start content in middle of image
  },
  topTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 30,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderColor: '#fff',
    borderWidth: 0.3
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  metadataContainer: {
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  metadataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metadataText: {
    fontSize: 12,
  },
  applyButton: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  applyButtonText: {
    fontWeight: '600',
    fontSize: 15,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    marginVertical: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '500',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  commentButton: {
    padding: 6,
    marginLeft: 4,
  },
});

export default SocialCard;