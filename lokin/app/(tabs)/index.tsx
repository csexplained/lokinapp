import React, { useRef } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import Header from '@/components/Header';
import SocialCard from '@/components/Home/Card';
import Swiper from 'react-native-deck-swiper';
import cardData from '@/data/carddata';

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
          stackScale={50}         // ✅ Optional 3D look
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
