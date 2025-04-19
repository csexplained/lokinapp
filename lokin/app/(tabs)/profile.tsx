import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfilePage = () => {
  const colorScheme = useColorScheme();

  const themeStyles = {
    container: {
      backgroundColor: colorScheme === 'dark' ? '#202020' : '#FFFFFF',
    },
    text: {
      color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    secondaryText: {
      color: colorScheme === 'dark' ? '#AAAAAA' : '#666666',
    },
    divider: {
      backgroundColor: colorScheme === 'dark' ? '#333333' : '#EEEEEE',
    },
    card: {
      backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#F5F5F5',
    },
    followButton: {
      backgroundColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
    },
    followButtontext: {
      color : colorScheme === 'dark' ? '#000000' : '#ffffff',
    },
    tab: {
      borderColor : colorScheme === 'dark' ? "#fff" : "#fff",
      backgroundColor: colorScheme === 'dark' ? '#000000' : '#000000',
    },
    tabText: {
      color: colorScheme === 'dark' ? '#FFFFFF' : '#FFFFFF',
    },
  };

  return (
    <ScrollView style={[styles.container, themeStyles.container]}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dxae5w6hn/image/upload/v1745057358/debmubdjgeste0iaanob.png' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileSection}>
        <View style={styles.profilePicContainer}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png' }}
            style={styles.profilePic}
            resizeMode="cover"
          />
        </View>

        <View style={styles.nameRow}>
          <View>
            <Text style={[styles.nameText, themeStyles.text]}>John Doe</Text>
            <Text style={[styles.usernameText, themeStyles.secondaryText]}>@johndoe</Text>
          </View>
          <TouchableOpacity style={[styles.followButton, themeStyles.followButton]}>
            <Text style={[styles.followButtonText,themeStyles.followButtontext]}>Follow</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.bioText, themeStyles.text]}>
          Digital creator | Photography enthusiast | Travel lover | Sharing moments that inspire
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, themeStyles.text]}>124</Text>
            <Text style={[styles.statLabel, themeStyles.text]}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, themeStyles.text]}>14</Text>
            <Text style={[styles.statLabel, themeStyles.text]}>Following</Text>
          </View>
        </View>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Feather name="link" size={16} color={colorScheme === 'dark' ? '#1e90ff' : '#666666'} />
            <Text style={[styles.metaText, { color: "#1e90ff" }]}>johndoe.portfolio</Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="map-pin" size={16} color={colorScheme === 'dark' ? '#AAAAAA' : '#666666'} />
            <Text style={[styles.metaText, themeStyles.secondaryText]}>San Francisco, CA</Text>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={[styles.divider, themeStyles.divider]} />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, themeStyles.tab]}>
          <Text style={[styles.tabText, themeStyles.tabText]}>124 Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, themeStyles.tab]}>
          <Text style={[styles.tabText, themeStyles.tabText]}>1.2K Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, themeStyles.tab]}>
          <Text style={[styles.tabText, themeStyles.tabText]}>84 Comments</Text>
        </TouchableOpacity>
      </View>
      {/* Divider */}
      <View style={[styles.divider, themeStyles.divider]} />

      {/* Posts Section */}
      <View style={styles.postsSection}>
        <View style={styles.postsGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View key={item} style={[styles.postCard, themeStyles.card]}>
              <Image
                source={{ uri: `https://picsum.photos/400/400?random=${item}` }}
                style={styles.postImage}
                resizeMode="cover"
              />
              <View style={styles.postStats}>
                <View style={styles.postStat}>
                  <Ionicons
                    name="heart"
                    size={16}
                    color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
                  />
                  <Text style={[styles.postStatText, themeStyles.text]}>{(item * 24)}</Text>
                </View>
                <View style={styles.postStat}>
                  <Ionicons
                    name="chatbubble"
                    size={16}
                    color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
                  />
                  <Text style={[styles.postStatText, themeStyles.text]}>{(item * 3)}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 30
  },
  bannerContainer: {
    width: '100%',
    height: 180,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderColor: "#fff",
    borderWidth: 0.3,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  profileSection: {
    paddingHorizontal: 20,
    marginTop: -60,
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 16,
    marginTop: 2,
  },
  followButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    fontWeight: 'bold',
  },
  bioText: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  statLabel: {
    fontSize: 14,
  },
  metaContainer: {
    marginTop: 15,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 14,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems : "center",
    gap : 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  tab: {
    borderWidth : 0.3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  postsSection: {
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCard: {
    width: (width - 40) / 3,
    height: (width - 40) / 3,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  postStats: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 5,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postStatText: {
    fontSize: 12,
    marginLeft: 3,
  },
});

export default ProfilePage;