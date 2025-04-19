import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  useColorScheme,
  Dimensions,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Usercard from '@/components/Message/Usercards';

const { width } = Dimensions.get('window');

const MessagesListPage = () => {
  const colorScheme = useColorScheme();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Sample message data
  const messages = [
    {
      id: '1',
      name: 'John Doe',
      status: 'Awesome',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unreadCount: 2,
      isOnline: true,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    {
      id: '2',
      name: 'Jane Smith',
      status: 'Sleepy',
      lastMessage: 'Can we meet tomorrow?',
      time: 'Yesterday',
      unreadCount: 0,
      isOnline: false,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    {
      id: '3',
      name: 'Mike Johnson',
      status: 'At work',
      lastMessage: 'I sent you the files',
      time: '2 days ago',
      unreadCount: 4,
      isOnline: true,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    {
      id: '4',
      name: 'John Doe',
      status: 'Awesome',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unreadCount: 2,
      isOnline: true,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    {
      id: '5',
      name: 'John Doe',
      status: 'Awesome',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unreadCount: 2,
      isOnline: true,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    {
      id: '6',
      name: 'John Doe',
      status: 'Awesome',
      lastMessage: 'Hey, how are you doing?',
      time: '10:30 AM',
      unreadCount: 2,
      isOnline: true,
      avatar: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png",
    },
    // Add more messages as needed
  ];

  const themeStyles = {
    container: {
      backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
    },
    headerText: {
      color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    messageCard: {
      backgroundColor: colorScheme === 'dark' ? '#1E1E1E' : '#FFFFFF',
      borderColor: colorScheme === 'dark' ? '#333' : '#EEE',
    },
    nameText: {
      color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    statusText: {
      color: colorScheme === 'dark' ? '#AAAAAA' : '#666666',
    },
    lastMessage: {
      color: colorScheme === 'dark' ? '#CCCCCC' : '#444444',
    },
    timeText: {
      color: colorScheme === 'dark' ? '#AAAAAA' : '#666666',
    },
    unreadBadge: {
      backgroundColor: '#0075FF',
    },
    onlineDot: {
      backgroundColor: '#4CAF50',
    },
    actionButton: {
      backgroundColor: colorScheme === 'dark' ? '#000' : '#000',
    },
  };

  return (
    <View style={[styles.container, themeStyles.container]}>
      {/* Header */}
      <View style={[styles.header]}>
        <TouchableOpacity
          style={[styles.backButton, themeStyles.actionButton]}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} color="#FFF" />
        </TouchableOpacity>

        <Text style={[styles.headerText, themeStyles.headerText]}>Messages</Text>

        <TouchableOpacity
          style={[styles.menuButton, themeStyles.actionButton]}
          onPress={() => setActiveMenu(activeMenu ? null : 'menu1')}
        >
          <Ionicons name="ellipsis-vertical" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <ScrollView style={styles.content}>
        {messages.map((message) => (
          <Usercard
            key={message.id}
            {...message}
          />
        ))}
      </ScrollView>

      {/* Three-dot menu (conditionally rendered) */}
      {activeMenu && (
        <View style={[styles.menuContainer, themeStyles.messageCard]}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuItemText, themeStyles.nameText]}>Mark all as read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuItemText, themeStyles.nameText]}>Delete all</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={[styles.menuItemText, themeStyles.nameText]}>Settings</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 50,
    flex: 1,
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
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
    gap: 8,
    padding: 10,
    flex: 1,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
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
    fontSize: 11,
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
    marginBottom: 5,
  },
  unreadBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: '#FFF',
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

export default MessagesListPage;