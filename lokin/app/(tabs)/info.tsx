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
import { BlueCheckIcon } from "@/assets/icons/iconsheader";
import BlogCard from "@/components/Info/PostCard";
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
  const tagBg = colorScheme === "dark" ? "#121212" : "#E9E9E9";
  const tagText = colorScheme === "dark" ? "#FFF" : "#000";
  const dividerColor =
    colorScheme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)";
  const tabBg = colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5";
  const inputBg = colorScheme === "dark" ? "#2B2B2B" : "#F0F0F0";
  const buttonBg = colorScheme === "dark" ? "#FFF" : "#000";
  const buttonText = colorScheme === "dark" ? "#000" : "#FFF";
  const activeTabBg = colorScheme === "dark" ? "#3A3A3A" : "#E0E0E0";

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colorScheme === 'dark' ? '#161616' : '#FFF', paddingTop: StatusBar.currentHeight || 16 }]}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View className="p-5">
        <ScrollView className="mb-5" horizontal>
          <View style={styles.tagsContainer}>
            {["Like", "Comment", "Share", "Save", "#startup", "#technology", "#cybersecurity"].map((tag) => (
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
        </ScrollView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <BlogCard
            userImage={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1744973037/yskwzkzfhth1kqokeu9q.png"}
            userName="Son of John Doe"
            userDesignation="Tech lead"

            caption="Twitter’s Community Notes is probably the best fact checking system that I’ve come across. Not perfect, but definitely a huge leap in the right direction."
            likesCount={3}
            commentsCount={2}
            isLiked={true}
            isSaved={false}
            onMenuPress={() => console.log('Menu pressed')}
            onLikePress={() => console.log('Like pressed')}
            onCommentPress={() => console.log('Comment pressed')}
            onSharePress={() => console.log('Share pressed')}
            onSavePress={() => console.log('Save pressed')}
          />
          <BlogCard
            userImage={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1744973037/yskwzkzfhth1kqokeu9q.png"}
            userName="John Doe"
            userDesignation="UI Designer"
            postImage={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1744973313/gpqrdgxxvw5canwyvjts.png"}
            caption="This is a beautiful sunset view from my recent trip to the mountains. Nature is truly amazing!"
            likesCount={245}
            commentsCount={32}
            isLiked={true}
            isSaved={false}
            onMenuPress={() => console.log('Menu pressed')}
            onLikePress={() => console.log('Like pressed')}
            onCommentPress={() => console.log('Comment pressed')}
            onSharePress={() => console.log('Share pressed')}
            onSavePress={() => console.log('Save pressed')}
          />
          <BlogCard
            userImage={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1744973037/yskwzkzfhth1kqokeu9q.png"}
            userName="Son of John Doe"
            userDesignation="Tech lead"

            caption="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. 
            - Steve Jobs"
            likesCount={3}
            commentsCount={2}
            isLiked={true}
            isSaved={false}
            onMenuPress={() => console.log('Menu pressed')}
            onLikePress={() => console.log('Like pressed')}
            onCommentPress={() => console.log('Comment pressed')}
            onSharePress={() => console.log('Share pressed')}
            onSavePress={() => console.log('Save pressed')}
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    height: 40,
    marginTop: 12,
  },
  tag: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    height: 30,
    borderRadius: 16,
    borderColor: '#fff',
    borderWidth: 0.3
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default SocialCard;

{/* 
  
  */}