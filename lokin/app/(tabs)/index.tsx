import React, { useRef } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import Header from '@/components/Header';
import SocialCard from '@/components/Home/Card';
import Swiper from 'react-native-deck-swiper';

const cardData = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744893624/xss6mp2kvcj3qcujikyo.png",
    title: "Amherst Coffee Shop",
    subtitle: "Join Preparing | Create",
    topTitle: "PixelHive",
    description: "Where Creativity Meets Strategy. We create stunning visuals, powerful branding, and engaging social media experiences that drive growth and make your brand unforgettable.",
    likeCount: 42,
    isLiked: true
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744893624/xss6mp2kvcj3qcujikyo.png",
    title: "Creative Studio",
    subtitle: "Design | Develop",
    topTitle: "DesignHub",
    description: "Innovative design solutions for modern businesses. We transform ideas into beautiful, functional digital experiences.",
    likeCount: 28,
    isLiked: false
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dxae5w6hn/image/upload/v1744893624/xss6mp2kvcj3qcujikyo.png",
    title: "TechWorks Agency",
    subtitle: "Code | Deploy | Scale",
    topTitle: "TechEdge",
    description: "Your trusted partner for software development and cloud solutions. Efficient, scalable, and secure technology tailored for your business.",
    likeCount: 30,
    isLiked: false
  },
];

export default function App() {
  const colorScheme = useColorScheme();
  const swiperRef = useRef(null);

  const handleSwiped = (index: number) => {
    console.log(`Card ${index} swiped`);
  };

  const handleSwipedLeft = (index: number) => {
    console.log(`Card ${index} swiped left`);
  };

  const handleSwipedRight = (index: number) => {
    console.log(`Card ${index} swiped right`);
  };

  return (
    <View style={[styles.container, colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Header />
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={cardData}
          renderCard={(card) => (
            <View style={styles.cardWrapper}>
              <SocialCard
                key={card.id}
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
          )}
          onSwiped={handleSwiped}
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
          backgroundColor="transparent"
          cardIndex={0}
          infinite
          stackSize={3}           // ✅ Show multiple stacked cards
          stackSeparation={15}    // ✅ Spacing between cards
          stackScale={10}         // ✅ Optional 3D look
          animateCardOpacity
          swipeAnimationDuration={400}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#161616',
  },
  swiperContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 5,
  },
  cardWrapper: {
    height: '80%',             // ✅ Don't make it 100% or stack won't show
    justifyContent: 'center',
  },
});
