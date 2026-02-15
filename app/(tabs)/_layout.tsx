import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'Puzzles',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'extension-puzzle' : 'extension-puzzle-outline'} color={color} size={24} />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="snap" options={{
        title: 'Snap',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'camera' : 'camera-outline'} color={color} size={24} />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="editor" options={{
        title: 'Editor',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'create' : 'create-outline'} color={color} size={24} />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="about" options={{
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
        ),
        headerShown: false
      }} />
    </Tabs>
  );
}
