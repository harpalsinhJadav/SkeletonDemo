import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import FlightCardSkeleton from './src/components/FlightCardSkeleton';
import { FlightCard } from './src/components/FlightCard';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [flight, setFlight] = useState<any>(null);

  // Simulate API loading
  useEffect(() => {
    setTimeout(() => {
      setFlight({
        from: "DME",
        to: "SHJ",
        nextRoute: "SHJ - CMB",
        date: "13 Oct 2025",
        departure: "00:10",
        arrival: "06:40",
        duration: "6 hours 30 minutes",
        flightNo: "G9798",
        onTime: true,
      });
      setLoading(false);
    }, 5000);
  }, []);


  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <FlightCardSkeleton />
      ) : (
        <FlightCard flight={flight} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  }
});
