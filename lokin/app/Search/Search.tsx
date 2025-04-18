import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import cardData from '@/data/carddata';
import SocialCard from '@/components/Search/CardSearch';
import FooterTabs from '@/components/FooterTabs';
import { FilterIcon } from '@/assets/icons/iconsheader';

const { width } = Dimensions.get('window');

const ExplorePage = () => {
    const colorScheme = useColorScheme();
    const [searchText, setSearchText] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tags = [
        'Food', 'Fashion', 'Gaming', 'Outdoors', 'Travel',
        'Music', 'Art', 'Photography', 'Fitness', 'Sports',
        'Technology', 'Movies', 'DIY', 'Pets',
        'Beauty', 'Health', 'Books', 'Finance', 'Education',
    ];

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const themeStyles = {
        container: {
            backgroundColor: colorScheme === 'dark' ? '#202020' : '#FFFFFF',

        },
        searchContainer: {
            backgroundColor: colorScheme === 'dark' ? '#121212' : '#F5F5F5',
        },
        searchInput: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        filterPanel: {
            backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
        },
        tag: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#F5F5F5',
        },
        selectedTag: {
            backgroundColor: '#fff',
        },
        tagText: {
            color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        },
        selectedTagText: {
            color: '#000000',
        },
    };

    return (
        <SafeAreaView style={[styles.container, themeStyles.container]}>
            {/* Floating Search Bar */}
            <View style={[styles.floatingSearchBar, themeStyles.searchContainer]}>
                <Ionicons
                    name="search"
                    size={20}
                    color={colorScheme === 'dark' ? '#999' : '#666'}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={[styles.searchInput, themeStyles.searchInput]}
                    placeholder="Search..."
                    placeholderTextColor={colorScheme === 'dark' ? '#999' : '#666'}
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => setShowFilters(!showFilters)}
                >
                    <FilterIcon  size={16} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Filter Panel (below floating search) */}
            {showFilters && (
                <View style={[styles.filterPanel, themeStyles.filterPanel]}>
                    <FlatList
                        data={tags}
                        numColumns={4}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.tag,
                                    themeStyles.tag,
                                    selectedTags.includes(item) && themeStyles.selectedTag
                                ]}
                                onPress={() => toggleTag(item)}
                            >
                                <Text style={[
                                    styles.tagText,
                                    themeStyles.tagText,
                                    selectedTags.includes(item) && themeStyles.selectedTagText
                                ]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.tagGrid}
                    />
                </View>
            )}

            {/* Scrollable Content */}
            <ScrollView
                style={styles.scrollContent}
                contentContainerStyle={{ paddingTop: showFilters ? 170 : 120, paddingBottom: 100 }}
            >
                <View style={styles.swiperContainer}>
                    {cardData.map((card) => (
                        <View style={styles.cardWrapper} key={card.id}>
                            <SocialCard
                                imageUrl={card.imageUrl}
                                title={card.title}
                                subtitle={card.subtitle}
                                topTitle={card.topTitle}
                                description={card.description}
                                onLike={() => console.log('Liked')}
                                onShare={() => console.log('Shared')}
                                onSave={() => console.log('Saved')}
                                likeCount={card.likeCount}
                                isLiked={card.isLiked}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Footer Tabs (manual) */}
            <FooterTabs />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingSearchBar: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 50,
        left: 15,
        right: 15,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#fff",
        borderWidth: 0.3,
        borderRadius: 30,
        paddingVertical: 2,
        paddingHorizontal: 0,
        paddingLeft: 10,
        paddingRight: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },
    scrollContent: {
        flex: 1,
    },
    swiperContainer: {
        paddingHorizontal: 10,
    },
    cardWrapper: {
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    filterButton: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 30,
        marginLeft: 8,
    },
    filterPanel: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 120 : 110,
        left: 15,
        right: 15,
        padding: 15,
        borderRadius: 15,
        zIndex: 9,
        borderColor: "#fff",
        borderWidth: 0.3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    tagGrid: {
        justifyContent: 'space-between',
    },
    tag: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        margin: 4,
        borderColor: '#fff',
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
    },
    tagText: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default ExplorePage;
