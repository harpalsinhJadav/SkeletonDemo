import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width } = Dimensions.get("window");

export default function FlightCardSkeleton() {
  return (
    <View style={styles.root}>
      <SkeletonPlaceholder borderRadius={8}>
        <View style={styles.card}>
          {/* Top section: Route & Status */}
          <View style={styles.row}>
            <View style={{ width: 150, height: 30 }} />
            <View style={{ width: 150, height: 30 }} />
          </View>

          <View style={styles.row}>
            <View style={{ width: 80, height: 12 }} />
            <View style={{ width: 100, height: 12 }} />
          </View>

          {/* Timeline Section */}
          <View style={styles.timeline}>
            <View style={{ width: 40, height: 14 }} />
            <View style={{ flex: 1, height: 12, marginHorizontal: 20 }} />
            <View style={{ width: 40, height: 14 }} />
          </View>

          {/* Divider */}
          <View style={{ marginVertical: 12, height: 1, width: "100%" }} />

          {/* Checked-in baggage row */}
          <View style={styles.row}>
            <View style={{ width: 330, height: 30 }} />
            {/* <View style={{ width: 60, height: 30 }} /> */}
          </View>

          {/* Extras row */}
          <View style={[styles.row, { marginTop: 10 }]}>
            <View style={{ width: 80, height: 14 }} />
            <View style={{ width: 80, height: 14 }} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F2F2F2", // light gray root background
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width - 40,
    padding: 16,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timeline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
});
