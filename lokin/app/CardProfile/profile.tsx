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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs'; // Adjust the import pat
import Accordion from "@/components/Accordion";
import { BlueCheckIcon, CommentIcon, CustomShare } from "@/assets/icons/iconsheader";
const FAQ_DATA = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by going to Settings > Account > Password Reset."
  },
  {
    question: "Where can I find my purchase history?",
    answer: "Your purchase history is available in the 'Orders' section of your profile."
  },
  {
    question: "What is hush protocool?",
    answer: " hush protocool? is a method used in cyber security to create hush its a protocool"
  },
  // Add more FAQ items as needed
];
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

  const [activeTab, setActiveTab] = React.useState("Details");

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
  const activeTabBg = colorScheme === "dark" ? "#3A3A3A" : "#E0E0E0";

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
                <Text style={[styles.title, { color: '#FFF' }]}>{title}  <BlueCheckIcon /></Text>
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
            <Text style={[styles.description, { color: textColor }]}>
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

          <View style={[styles.divider, { backgroundColor: dividerColor }]} />

          {/* Metadata Section */}
          <View style={styles.metadataContainer}>
            <View style={styles.metadataRow}>
              <View style={styles.metadataColumn}>
                <View style={styles.metadataItem}>
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Category: <Text style={styles.metadataValue}>Cyber Security</Text>
                  </Text>
                </View>
                <View style={styles.metadataItem}>
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Created by: <Text style={styles.metadataValue}>Bhanu Pratap</Text>
                  </Text>
                </View>
                <View style={styles.metadataItem}>
                  <Text style={[styles.metadataText, { color: secondaryTextColor }]}>
                    Date Posted: <Text style={styles.metadataValue}>Sep 11th</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.metadataColumnRight}>
                <View style={[styles.teamSizeContainer, { backgroundColor: colorScheme === 'dark' ? '#202020' : '#E0E0E0' }]}>
                  <Ionicons
                    name="people"
                    size={18}
                    color={secondaryTextColor}
                  />
                  <Text style={[styles.teamSizeText, { color: textColor }]}>
                    Team Size: 1
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Application Buttons */}
          <View style={styles.applicationButtonsContainer}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={[styles.applicationButton, { backgroundColor: colorScheme === 'dark' ? '#202020' : '#E0E0E0' }]}>
                <View style={styles.applicationButtonContent}>
                  <Ionicons
                    name="people"
                    size={20}
                    color={secondaryTextColor}
                  />
                  <Text style={[styles.applicationButtonText, { color: textColor }]}>
                    Apply for Cyber Security Engi Roll
                  </Text>
                </View>
                <TouchableOpacity style={[styles.applyButton, { backgroundColor: buttonBg }]}>
                  <Text style={[styles.applyButtonText, { color: buttonText }]}>Apply</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={[styles.divider, { backgroundColor: dividerColor }]} />
          <View style={[styles.tabSectionContainer, { backgroundColor: colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' }]}>
            <Tabs defaultValue="Details">
              <TabsList>
                <TabsTrigger value="Team">Team Members</TabsTrigger>
                <TabsTrigger value="Details">Details</TabsTrigger>

                <TabsTrigger value="Comments">Comments (12)</TabsTrigger>
              </TabsList>

              <TabsContent value="Details">
                <Accordion data={FAQ_DATA} />
              </TabsContent>

              <TabsContent value="Team">
                <View className="gap-4">
                  {/* Header positioned at top of image */}
                  <View style={styles.header2}>
                    <View style={styles.avatarContainer2}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.avatar2}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.headerText2}>
                      <Text style={[styles.title2, { color: '#FFF' }]}>{title}</Text>
                      <Text style={[styles.subtitle2, { color: 'rgba(255,255,255,0.8)' }]}>{subtitle}</Text>
                    </View>
                  </View>
                  <View style={styles.header2}>
                    <View style={styles.avatarContainer2}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.avatar2}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.headerText2}>
                      <Text style={[styles.title2, { color: '#FFF' }]}>{title}</Text>
                      <Text style={[styles.subtitle2, { color: 'rgba(255,255,255,0.8)' }]}>{subtitle}</Text>
                    </View>
                  </View>
                  <View style={styles.header2}>
                    <View style={styles.avatarContainer2}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.avatar2}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.headerText2}>
                      <Text style={[styles.title2, { color: '#FFF' }]}>{title}</Text>
                      <Text style={[styles.subtitle2, { color: 'rgba(255,255,255,0.8)' }]}>{subtitle}</Text>
                    </View>
                  </View>
                </View>
              </TabsContent>

              <TabsContent value="Comments">
                <View style={styles.tabContentContainer}>
                  {/* Render comments here */}
                  <Text style={[styles.description, { color: textColor }]}>
                    0 Comment(s) for project:
                  </Text>

                  {/* Comment Input */}
                  <View style={[styles.commentContainer, { backgroundColor: "transprent" }]}>
                    <TextInput
                      style={[styles.commentInput, { color: textColor }]}
                      placeholder="Write a comment..."
                      placeholderTextColor={secondaryTextColor}
                    />
                    <TouchableOpacity
                      style={styles.commentButton}
                      activeOpacity={0.7}
                    >
                      <CustomShare  size={20} color={actionIconColor} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TabsContent>
            </Tabs>
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
    paddingBottom: 60, // Add padding for bottom tabs
  },
  imageContainer: {
    height: height * 0.7,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
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
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer2: {
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
  avatar2: {
    width: '100%',
    height: '100%',
  },
  headerText2: {
    flex: 1,
  },
  title2: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  subtitle2: {
    fontSize: 12,
  },
  tabSectionContainer: {
    padding: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabContentContainer: {
    paddingVertical: 0,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionBar: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -50 }],
    flexDirection: 'column',
    gap: 16,
    padding: 4,
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
    marginTop: -height * 0.2,
    backgroundColor: 'transparent',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  textContent: {
    backgroundColor: 'transparent',
    paddingTop: height * 0.05,
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
  },
  metadataColumn: {
    width: '50%',
    gap: 8,
  },
  metadataColumnRight: {
    width: '50%',
    alignItems: 'flex-end',
    gap: 8,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,

  },
  metadataText: {
    fontSize: 12,
  },
  metadataValue: {
    color: '#FFF',
  },
  teamSizeContainer: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 24,
    width: 144,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamSizeText: {
    fontSize: 12,
  },
  applicationButtonsContainer: {
    gap: 8,
  },
  applicationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  applicationButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  applicationButtonText: {
    fontSize: 12,
  },
  applyButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  applyButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    marginVertical: 16,
  },
  tabContent: {
    paddingVertical: 16,
  },
  tabContentText: {
    fontSize: 14,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "",
    borderColor: "#fff",
    borderWidth: 0.3,
    paddingLeft: 10,
    paddingRight: 3,
    paddingVertical: 3,
    marginTop: 8,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  commentButton: {
    padding: 14,
    marginLeft: 4,
    borderRadius: 30,
    backgroundColor: "#2B2A2A"
  },
  bottomTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  bottomTabText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SocialCard;