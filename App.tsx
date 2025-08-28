import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <SkeletonPlaceholder>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.textContainer}>
                <View style={styles.line} />
                <View style={[styles.line, { width: 150, marginTop: 6 }]} />
              </View>
            </View>
          ))}
        </SkeletonPlaceholder>
      ) : (
        [...Array(5)].map((_, index) => (
          <View key={index} style={styles.cardLoaded}>
            <Text style={styles.avatarText}>{index + 1}</Text>
            <View>
              <Text style={styles.name}>User {index + 1}</Text>
              <Text style={styles.detail}>Detail info for user {index + 1}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 12,
  },
  line: {
    height: 20,
    width: 220,
    borderRadius: 4,
  },
  cardLoaded: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  avatarText: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    marginRight: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  detail: {
    color: '#555',
  },
});
