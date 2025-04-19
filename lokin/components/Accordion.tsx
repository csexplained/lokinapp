import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  Animated,
  Easing
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  data: FAQItem[];
}

const AccordionItem: React.FC<{
  item: FAQItem;
  index: number;
  isActive: boolean;
  onPress: (index: number) => void;
  colorScheme: 'light' | 'dark';
}> = ({ item, index, isActive, onPress, colorScheme }) => {
  const [rotateAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  }, [isActive]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  return (
    <View
      style={[
        styles.accordionItem,
        {
          backgroundColor: isActive
            ? colorScheme === 'dark' ? '#202020' : 'rgba(240, 240, 240, 0.5)'
            : 'transparent',
          borderColor: colorScheme === 'dark' ? '#fff' : 'transparent',
          borderRadius: isActive ? 20 : 20,
          borderWidth: isActive ? 0.2 : 0,
        }
      ]}
    >
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => onPress(index)}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.questionText,
          { color: colorScheme === 'dark' ? '#FFF' : '#000' }
        ]}>
          {item.question}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <Ionicons
            name="chevron-down"
            size={20}
            color={colorScheme === 'dark' ? '#FFF' : '#000'}
          />
        </Animated.View>
      </TouchableOpacity>

      {isActive && (
        <View style={styles.accordionContent}>
          <Text style={[
            styles.answerText,
            { color: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }
          ]}>
            {item.answer}
          </Text>
        </View>
      )}
    </View>
  );
};

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const colorScheme = useColorScheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isActive={activeIndex === index}
          onPress={toggleAccordion}
          colorScheme={colorScheme || 'light'}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  accordionItem: {

    overflow: 'hidden',
  },
  accordionHeader: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    marginRight: 12,
  },
  accordionContent: {
    padding: 12,
    paddingTop: 0,
  },
  answerText: {
    fontSize: 12,
    lineHeight: 20,
  },
});

export default Accordion;