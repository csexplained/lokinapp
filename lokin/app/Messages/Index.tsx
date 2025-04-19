import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    useColorScheme,
    Dimensions,
    Platform,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CustomShare } from '@/assets/icons/iconsheader';

const { width, height } = Dimensions.get('window');

type Message = {
    id: string;
    text?: string;
    image?: string;
    voice?: string;
    sender: 'me' | 'other';
    time: string;
    date?: string;
};

const MessagesListPage = () => {
    const colorScheme = useColorScheme();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const [showAttachments, setShowAttachments] = useState(false);

    // Sample messages
    useEffect(() => {
        const sampleMessages: Message[] = [
            {
                id: '1',
                text: 'Hey there! How are you doing?',
                sender: 'other',
                time: '10:30 AM',
                date: 'Today'
            },
            {
                id: '2',
                text: "I'm good, thanks! How about you?",
                sender: 'me',
                time: '10:32 AM',
                date: 'Today'
            },
            {
                id: '3',
                image: 'https://res.cloudinary.com/dxae5w6hn/image/upload/v1744973313/gpqrdgxxvw5canwyvjts.png',
                sender: 'other',
                time: '10:33 AM',
                date: 'Today'
            },
            {
                id: '4',
                text: 'Check out this cool image I found!',
                sender: 'other',
                time: '10:33 AM',
                date: 'Today'
            },
            {
                id: '5',
                text: 'That looks amazing! Where was this taken?',
                sender: 'me',
                time: '10:35 AM',
                date: 'Today'
            },
            {
                id: '6',
                voice: 'voice_message.mp3',
                sender: 'other',
                time: '10:36 AM',
                date: 'Today'
            },
        ];
        setMessages(sampleMessages);
    }, []);

    const themeStyles = {
        container: {
            backgroundColor: colorScheme === 'dark' ? '#202020' : '#FFFFFF',
        },
        headerText: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        messageCard: {
            backgroundColor: colorScheme === 'dark' ? '#202020' : '#FFFFFF',
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
        inputContainer: {
            backgroundColor: colorScheme === 'dark' ? '#0F0F0F' : '#F5F5F0',
        },
        sendbox: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF',
        },
        massagecontainer: {
            backgroundColor: colorScheme === "dark" ? "#0F0F0F" : "#ffffff",
        },
        inputbox: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
            backgroundColor: colorScheme === 'dark' ? '#2D2D2D' : '#FFFFFF',
        },
        messageBubbleMe: {
            backgroundColor: colorScheme === 'dark' ? '#121212' : '#007AFF',
        },
        messageBubbleOther: {
            backgroundColor: colorScheme === 'dark' ? '#3F3F3F' : '#E5E5EA',
        },
        messageTextMe: {
            color: '#FFFFFF',
        },
        messageTextOther: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        dateText: {
            color: colorScheme === 'dark' ? '#AAAAAA' : '#666666',
        },
        attachmentMenu: {
            backgroundColor: colorScheme === 'dark' ? '#2D2D2D' : '#FFFFFF',
        },
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMsg: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: 'Today'
        };

        setMessages([...messages, newMsg]);
        setNewMessage('');

        // Scroll to bottom after a short delay
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    const renderMessage = (message: Message, index: number) => {
        const showDate = index === 0 || messages[index - 1]?.date !== message.date;

        return (
            <View key={message.id}>
                {showDate && (
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateText, themeStyles.dateText]}>{message.date}</Text>
                    </View>
                )}

                <View style={[
                    styles.messageBubble,
                    message.sender === 'me'
                        ? [styles.messageBubbleMe, themeStyles.messageBubbleMe]
                        : [styles.messageBubbleOther, themeStyles.messageBubbleOther],
                    message.sender === 'me' ? styles.messageBubbleRight : styles.messageBubbleLeft
                ]}>
                    {message.image && (
                        <Image
                            source={{ uri: message.image }}
                            style={styles.messageImage}
                            resizeMode="cover"
                        />
                    )}

                    {message.voice && (
                        <TouchableOpacity style={styles.voiceMessage}>
                            <FontAwesome name="play-circle" size={24} color={message.sender === 'me' ? '#FFF' : '#007AFF'} />
                            <Text style={[
                                styles.voiceMessageText,
                                message.sender === 'me' ? styles.voiceMessageTextMe : styles.voiceMessageTextOther
                            ]}>
                                0:15
                            </Text>
                        </TouchableOpacity>
                    )}

                    {message.text && (
                        <Text style={[
                            styles.messageText,
                            message.sender === 'me' ? themeStyles.messageTextMe : themeStyles.messageTextOther
                        ]}>
                            {message.text}
                        </Text>
                    )}

                    <Text style={[
                        styles.messageTime,
                        message.sender === 'me' ? styles.messageTimeRight : styles.messageTimeLeft
                    ]}>
                        {message.time}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, themeStyles.container]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            {/* Header */}
            <View style={[styles.header]}>
                <TouchableOpacity
                    style={[styles.backButton, themeStyles.actionButton]}
                    onPress={() => router.push("/(tabs)/messages")}
                >
                    <Ionicons name="chevron-back" size={20} color="#FFF" />
                </TouchableOpacity>

                <View style={styles.topbar}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744991885/ukhbigxbjkrbj91yfcqk.png" }}
                    />
                    <View style={styles.userInfo}>
                        <Text style={[styles.userName, themeStyles.nameText]}>John Doe</Text>
                        <Text style={[styles.userStatus, themeStyles.statusText]}>Online</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.menuButton, themeStyles.actionButton]}
                    onPress={() => setActiveMenu(activeMenu ? null : 'menu1')}
                >
                    <Ionicons name="ellipsis-vertical" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Messages Container */}
            <ScrollView
                ref={scrollViewRef}
                style={[styles.messagesContainer, themeStyles.massagecontainer]}
                contentContainerStyle={styles.messagesContent}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {messages.map((message, index) => renderMessage(message, index))}
            </ScrollView>

            {/* Input Area */}
            <View style={[styles.inputContainer, themeStyles.inputContainer]}>
                {showAttachments && (
                    <View style={[styles.attachmentMenu, themeStyles.attachmentMenu]}>
                        <TouchableOpacity style={styles.attachmentButton}>
                            <MaterialIcons name="photo" size={24} color="#007AFF" />
                            <Text style={styles.attachmentText}>Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.attachmentButton}>
                            <FontAwesome name="camera" size={24} color="#007AFF" />
                            <Text style={styles.attachmentText}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.attachmentButton}>
                            <FontAwesome name="microphone" size={24} color="#007AFF" />
                            <Text style={styles.attachmentText}>Voice</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={styles.inputRow}>
                    <TouchableOpacity
                        style={styles.attachmentToggle}
                        onPress={() => setShowAttachments(!showAttachments)}
                    >
                        <Entypo
                            name={showAttachments ? "chevron-down" : "plus"}
                            size={24}
                            color={colorScheme === 'dark' ? '#000000' : '#000000'}
                        />
                    </TouchableOpacity>
                    <View style={[styles.input, themeStyles.inputbox]}>
                        <TextInput

                            placeholder="Type message..."
                            placeholderTextColor={colorScheme === 'dark' ? '#AAAAAA' : '#666666'}
                            value={newMessage}
                            onChangeText={setNewMessage}
                            multiline
                        />

                        <TouchableOpacity
                            style={[styles.sendButton, themeStyles.sendbox]}
                            onPress={handleSendMessage}
                            disabled={!newMessage.trim()}
                        >
                            <CustomShare
                                size={24}
                                color={newMessage.trim() ? '#007AFF' : (colorScheme === 'dark' ? '#fff' : '#000')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

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
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
    },
    topbar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 15,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userInfo: {
        flexDirection: 'column',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userStatus: {
        fontSize: 12,
    },
    menuButton: {
        padding: 8,
        borderRadius: 20,
    },
    messagesContainer: {

        borderWidth: 0.3,
        borderColor: "#fff",
        borderBottomWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
    },
    messagesContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    dateContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    dateText: {
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 20,
        marginBottom: 10,
    },
    messageBubbleLeft: {
        alignSelf: 'flex-start',
    },
    messageBubbleRight: {
        alignSelf: 'flex-end',
    },
    messageBubbleMe: {
        borderColor: "#fff",
        borderWidth: 0.3,
        backgroundColor: '#3F3F3F',
    },
    messageBubbleOther: {
        backgroundColor: '#E5E5EA',
    },
    messageText: {
        fontSize: 16,
    },
    messageImage: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 0,
    },
    voiceMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    voiceMessageText: {
        marginLeft: 10,
    },
    voiceMessageTextMe: {
        color: '#FFF',
    },
    voiceMessageTextOther: {
        color: '#007AFF',
    },
    messageTime: {
        fontSize: 10,
        marginTop: 5,
    },
    messageTimeLeft: {
        textAlign: 'left',
        color: '#666',
    },
    messageTimeRight: {
        textAlign: 'right',
        color: 'rgba(255,255,255,0.7)',
    },
    inputContainer: {
        padding: 10,
    },
    attachmentMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    attachmentButton: {
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    attachmentText: {
        marginTop: 5,
        fontSize: 12,
        color: '#007AFF',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    attachmentToggle: {
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 10,
    },
    input: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 0.3,
        maxHeight: 120,
        borderRadius: 30,
        paddingRight: 3,
        paddingLeft: 10,
        paddingVertical: 4,
        marginHorizontal: 5,
        fontSize: 16,
    },
    sendButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 30

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