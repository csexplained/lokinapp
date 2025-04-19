import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
}

interface TabsListProps {
    children: React.ReactNode;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
}

const TabsContext = React.createContext<{
    activeTab: string;
    setActiveTab: (value: string) => void;
}>({
    activeTab: '',
    setActiveTab: () => { },
});

const Tabs = ({ defaultValue, children }: TabsProps) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <View style={styles.tabsContainer}>{children}</View>
        </TabsContext.Provider>
    );
};

const TabsList = ({ children }: TabsListProps) => {
    const colorScheme = useColorScheme();
    const borderColor = colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View style={[styles.tabsList, { borderColor }]}>
            {children}
        </View>
    );
};

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
    const { activeTab, setActiveTab } = React.useContext(TabsContext);
    const colorScheme = useColorScheme();
    const isActive = activeTab === value;

    const activeBgColor = colorScheme === 'dark' ? '#2B2A2A' : '#E9E9E9';
    const inactiveTextColor = colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    const activeTextColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <TouchableOpacity
            style={[
                styles.tabTrigger,
                isActive && { backgroundColor: activeBgColor }
            ]}
            onPress={() => setActiveTab(value)}
        >
            <Text style={[
                styles.tabTriggerText,
                { color: isActive ? activeTextColor : inactiveTextColor }
            ]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const TabsContent = ({ value, children }: TabsContentProps) => {
    const { activeTab } = React.useContext(TabsContext);

    if (activeTab !== value) return null;

    return <View style={styles.tabContent}>{children}</View>;
};

const styles = StyleSheet.create({
    tabsContainer: {
        width: '100%',
    },
    tabsList: {
        flexDirection: 'row',
        borderWidth: 0.3,
        padding: 4,
        borderRadius: 30,
        justifyContent: "space-between",
        marginBottom: 16,
    },
    tabTrigger: {
        borderRadius: 30,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 8,
    },
    tabTriggerText: {
        fontWeight: '500',
        fontSize: 14,
    },
    tabContent: {
        paddingVertical: 16,
    },
});

// Export the components
export { Tabs, TabsList, TabsTrigger, TabsContent };