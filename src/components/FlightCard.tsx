import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export function FlightCard({ flight }:{flight:any}) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        {/* Top section: Route & Status */}
        <View style={styles.row}>
          <Text style={styles.route}>{flight.from} - {flight.to}</Text>
          <Text style={styles.subText}>{flight.nextRoute}</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.status, flight.onTime ? styles.onTime : styles.delayed]}>
            {flight.onTime ? "On Time" : "Delayed"}
          </Text>
          <Text style={styles.subText}>{flight.date}</Text>
        </View>

        {/* Timeline Section */}
        <View style={styles.timeline}>
          <Text style={styles.time}>{flight.departure}</Text>
          <View style={styles.flightLine}>
            <Text style={styles.flightNo}>{flight.flightNo}</Text>
            <Text style={styles.duration}>{flight.duration}</Text>
          </View>
          <Text style={styles.time}>{flight.arrival}</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Checked-in baggage row */}
        <View style={styles.row}>
          <Text style={styles.subText}>Checked-in Baggage</Text>
          <Text style={styles.link}>View</Text>
        </View>

        {/* Extras row */}
        <View style={styles.row}>
          <Text style={styles.subText}>Extras</Text>
          <Text style={styles.link}>View / Modify</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "#F2F2F2", // light gray background
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width - 40,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  route: {
    fontSize: 16,
    fontWeight: "600",
    color: "#d11a5f", // pinkish red like in screenshot
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
  },
  onTime: {
    color: "green",
  },
  delayed: {
    color: "red",
  },
  subText: {
    fontSize: 13,
    color: "#555",
  },
  timeline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
  },
  flightLine: {
    flex: 1,
    alignItems: "center",
  },
  flightNo: {
    fontSize: 12,
    color: "#999",
  },
  duration: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },
  link: {
    fontSize: 13,
    fontWeight: "500",
    color: "#d11a5f",
  },
});
