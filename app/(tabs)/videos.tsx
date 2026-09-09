import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
  Share,
  FlatList,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { videoShowcaseCollection, videoShowcaseCategories, VideoShowcaseItem } from '@/constants/data';
import { SearchBar } from '@/components';

const LEVEL_COLORS: Record<string, string> = {
  Beginner: '#00C9A7',
  Intermediate: '#FFB800',
  Advanced: '#FF5A6A',
};

const RES_COLORS: Record<string, string> = {
  'Ultra HD 4K': '#FFB800',
  'Full HD': '#4FC3F7',
};

function VideoCard({ item, onPress, onShare }: { item: VideoShowcaseItem; onPress: () => void; onShare: () => void }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true, speed: 50, bounciness: 2 }).start();
  const handlePressOut = () => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, speed: 50, bounciness: 2 }).start();

  return (
    <Animated.View style={[styles.card3D, { transform: [{ scale: scaleAnim }] }]}>
      {/* Top color band */}
      <View style={[styles.cardBand, { backgroundColor: item.color }]}>
        <View style={[styles.bandIconWrap, { backgroundColor: 'rgba(255,255,255,0.15)' }]}>
          <MaterialIcons name={item.icon as any} size={28} color="#fff" />
        </View>
        <View style={styles.bandMeta}>
          <View style={styles.bandBadgesRow}>
            <View style={[styles.resBadge, { backgroundColor: RES_COLORS[item.resolution] || '#4FC3F7' }]}>
              <MaterialIcons name="hd" size={10} color="#000" />
              <Text style={styles.resBadgeText}>{item.resolution}</Text>
            </View>
            <View style={[styles.levelBadge, { backgroundColor: LEVEL_COLORS[item.level] || '#00C9A7' }]}>
              <Text style={styles.levelBadgeText}>{item.level}</Text>
            </View>
          </View>
          <View style={styles.bandDurationRow}>
            <MaterialIcons name="schedule" size={12} color="rgba(255,255,255,0.85)" />
            <Text style={styles.bandDuration}>{item.duration}</Text>
          </View>
        </View>
        <Pressable hitSlop={12} onPress={onShare} style={styles.shareBtn}>
          <MaterialIcons name="share" size={18} color="rgba(255,255,255,0.9)" />
        </Pressable>
      </View>

      {/* Card body */}
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.cardBody}
        accessibilityRole="button"
        accessibilityLabel={`Open video: ${item.title}`}
      >
        {/* Sub-category pill */}
        <View style={[styles.subCatPill, { borderColor: item.color + '60', backgroundColor: item.color + '15' }]}>
          <Text style={[styles.subCatText, { color: item.color }]}>{item.subCategory}</Text>
        </View>

        {/* Title */}
        <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>

        {/* Description */}
        <Text style={styles.cardDesc} numberOfLines={3}>{item.description}</Text>

        {/* Key Points */}
        <View style={styles.keyPointsSection}>
          <View style={styles.keyPointsHeader}>
            <MaterialIcons name="check-circle" size={13} color={item.color} />
            <Text style={[styles.keyPointsLabel, { color: item.color }]}>Core Features</Text>
          </View>
          <View style={styles.keyPointsGrid}>
            {item.keyPoints.map((kp, idx) => (
              <View key={idx} style={[styles.keyPointItem, { borderColor: item.color + '30' }]}>
                <View style={[styles.kpDot, { backgroundColor: item.color }]} />
                <Text style={styles.kpText} numberOfLines={2}>{kp}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Tags row */}
        <View style={styles.tagsRow}>
          {item.tags.slice(0, 3).map((tag) => (
            <View key={tag} style={[styles.tag, { backgroundColor: item.color + '18', borderColor: item.color + '40' }]}>
              <Text style={[styles.tagText, { color: item.color }]}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Channel + CTA */}
        <View style={styles.cardFooter}>
          <View style={styles.channelRow}>
            <MaterialIcons name="tv" size={14} color={Colors.textMuted} />
            <Text style={styles.channelText}>{item.channel}</Text>
          </View>
          <View style={[styles.watchBtn, { backgroundColor: item.color }]}>
            <MaterialIcons name="play-arrow" size={14} color="#fff" />
            <Text style={styles.watchBtnText}>Watch Now</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function VideoShowcaseScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = useMemo(() => {
    let items = videoShowcaseCollection;
    if (selectedCategory !== 'all') {
      items = items.filter(
        (v) =>
          v.category === selectedCategory ||
          v.subCategory === selectedCategory
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.subCategory.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q)) ||
          v.keyPoints.some((k) => k.toLowerCase().includes(q))
      );
    }
    return items;
  }, [search, selectedCategory]);

  const openURL = useCallback(async (url: string) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (ok) await Linking.openURL(url);
      else Alert.alert('Cannot open', 'Unable to open this link.');
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  }, []);

  const shareVideo = useCallback(async (item: VideoShowcaseItem) => {
    try {
      await Share.share({
        title: item.title,
        message: `${item.title}\n\nChannel: ${item.channel} | ${item.resolution} | ${item.duration}\n\n${item.description}\n\nKey Topics: ${item.keyPoints.join(', ')}\n\n${item.url}`,
        url: item.url,
      });
    } catch { }
  }, []);

  const totalStats = {
    total: videoShowcaseCollection.length,
    uhd: videoShowcaseCollection.filter((v) => v.resolution === 'Ultra HD 4K').length,
    advanced: videoShowcaseCollection.filter((v) => v.level === 'Advanced').length,
    medical: videoShowcaseCollection.filter((v) => v.category === 'Medical').length,
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerIconBg}>
            <MaterialIcons name="video-library" size={22} color={Colors.primary} />
          </View>
          <View>
            <Text style={styles.headerTitle}>Video Showcase</Text>
            <Text style={styles.headerSub}>Scientific & Medical · HD Visualizations</Text>
          </View>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{filtered.length}</Text>
          <Text style={styles.countSub}>videos</Text>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            {/* Stats Banner */}
            <View style={styles.statsBanner}>
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: Colors.primary }]}>{totalStats.total}</Text>
                <Text style={styles.statLbl}>Total Videos</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: '#FFB800' }]}>{totalStats.uhd}</Text>
                <Text style={styles.statLbl}>Ultra HD 4K</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: '#FF5A6A' }]}>{totalStats.advanced}</Text>
                <Text style={styles.statLbl}>Advanced</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statVal, { color: '#FF6B9D' }]}>{totalStats.medical}</Text>
                <Text style={styles.statLbl}>Medical</Text>
              </View>
            </View>

            {/* Search */}
            <SearchBar
              value={search}
              onChangeText={setSearch}
              placeholder="Search topics, channels, keywords..."
            />

            {/* Category Chips */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
              {videoShowcaseCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <Pressable
                    key={cat.id}
                    style={[
                      styles.chip,
                      isSelected
                        ? { backgroundColor: cat.color, borderColor: cat.color }
                        : { backgroundColor: Colors.surfaceElevated, borderColor: Colors.surfaceBorder }
                    ]}
                    onPress={() => setSelectedCategory(cat.id)}
                  >
                    <MaterialIcons name={cat.icon as any} size={14} color={isSelected ? '#fff' : cat.color} />
                    <Text style={[styles.chipLabel, { color: isSelected ? '#fff' : Colors.textSecondary }]}>
                      {cat.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            {/* Results label */}
            <Text style={styles.resultsLabel}>
              {filtered.length} video{filtered.length !== 1 ? 's' : ''} found
              {selectedCategory !== 'all' ? ` in "${videoShowcaseCategories.find(c => c.id === selectedCategory)?.label}"` : ''}
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <VideoCard
            item={item}
            onPress={() => openURL(item.url)}
            onShare={() => shareVideo(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <MaterialIcons name="videocam-off" size={48} color={Colors.textMuted} />
            <Text style={styles.emptyTitle}>No videos found</Text>
            <Text style={styles.emptySub}>Try a different search or category</Text>
          </View>
        }
        ListFooterComponent={<View style={{ height: Spacing.xl + insets.bottom }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.md,
    borderBottomWidth: 1, borderBottomColor: Colors.surfaceBorder,
    backgroundColor: Colors.surface,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerIconBg: {
    width: 40, height: 40, borderRadius: Radius.md,
    backgroundColor: Colors.primary + '18',
    alignItems: 'center', justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17, fontWeight: Typography.fontWeightExtraBold,
    color: Colors.textPrimary,
  },
  headerSub: { fontSize: 10, color: Colors.textMuted, marginTop: 1 },
  countBadge: {
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: Colors.primary + '20',
    borderRadius: Radius.md, paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: Colors.primary + '40',
  },
  countText: { fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightExtraBold, color: Colors.primary },
  countSub: { fontSize: 9, color: Colors.primary, fontWeight: Typography.fontWeightMedium },

  statsBanner: {
    flexDirection: 'row', marginHorizontal: Spacing.md, marginTop: Spacing.md,
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    borderWidth: 1, borderColor: Colors.surfaceBorder, padding: Spacing.md,
    ...Shadow.card,
  },
  statItem: { flex: 1, alignItems: 'center', gap: 3 },
  statVal: { fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightExtraBold },
  statLbl: { fontSize: 9, color: Colors.textMuted, fontWeight: Typography.fontWeightMedium, textAlign: 'center' },
  statDivider: { width: 1, backgroundColor: Colors.surfaceBorder, marginVertical: 4 },

  chipsRow: {
    paddingHorizontal: Spacing.md, gap: 8, paddingVertical: Spacing.sm,
  },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    paddingHorizontal: 12, paddingVertical: 7, borderRadius: Radius.full,
    borderWidth: 1,
  },
  chipLabel: { fontSize: 12, fontWeight: Typography.fontWeightSemiBold },

  resultsLabel: {
    fontSize: Typography.fontSizeXS, color: Colors.textMuted,
    marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
    fontWeight: Typography.fontWeightMedium,
  },

  list: { paddingTop: Spacing.sm },

  // ── 3D Card ──
  card3D: {
    marginHorizontal: Spacing.md, marginBottom: Spacing.md,
    borderRadius: Radius.lg, overflow: 'hidden',
    backgroundColor: Colors.surface,
    borderWidth: 1, borderColor: Colors.surfaceBorder,
    // 3D shadow effect
    shadowColor: '#00C9A7',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 10,
  },
  cardBand: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: Spacing.md, paddingVertical: 14,
  },
  bandIconWrap: {
    width: 52, height: 52, borderRadius: Radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  bandMeta: { flex: 1, gap: 6 },
  bandBadgesRow: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  resBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 3,
    paddingHorizontal: 7, paddingVertical: 2, borderRadius: Radius.full,
  },
  resBadgeText: { fontSize: 9, fontWeight: Typography.fontWeightExtraBold, color: '#000' },
  levelBadge: {
    paddingHorizontal: 8, paddingVertical: 2, borderRadius: Radius.full,
  },
  levelBadgeText: { fontSize: 9, fontWeight: Typography.fontWeightExtraBold, color: '#fff' },
  bandDurationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  bandDuration: { fontSize: 11, color: 'rgba(255,255,255,0.85)', fontWeight: Typography.fontWeightMedium },
  shareBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },

  cardBody: { padding: Spacing.md, gap: 10 },
  subCatPill: {
    alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 3,
    borderRadius: Radius.full, borderWidth: 1,
  },
  subCatText: { fontSize: 10, fontWeight: Typography.fontWeightBold },

  cardTitle: {
    fontSize: Typography.fontSizeBase, fontWeight: Typography.fontWeightExtraBold,
    color: Colors.textPrimary, lineHeight: 22,
  },
  cardDesc: {
    fontSize: Typography.fontSizeXS, color: Colors.textSecondary,
    lineHeight: 17,
  },

  keyPointsSection: {
    backgroundColor: Colors.surfaceElevated, borderRadius: Radius.md,
    padding: Spacing.sm, gap: 6,
    borderWidth: 1, borderColor: Colors.surfaceBorder,
  },
  keyPointsHeader: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  keyPointsLabel: { fontSize: 11, fontWeight: Typography.fontWeightBold },
  keyPointsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 6,
  },
  keyPointItem: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 5,
    width: '48%', borderRadius: Radius.sm, borderWidth: 1,
    padding: 6, backgroundColor: Colors.background,
  },
  kpDot: { width: 5, height: 5, borderRadius: 3, marginTop: 4, flexShrink: 0 },
  kpText: { fontSize: 10, color: Colors.textSecondary, flex: 1, lineHeight: 14 },

  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full, borderWidth: 1 },
  tagText: { fontSize: 10, fontWeight: Typography.fontWeightSemiBold },

  cardFooter: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', marginTop: 4,
  },
  channelRow: { flexDirection: 'row', alignItems: 'center', gap: 5, flex: 1 },
  channelText: { fontSize: 11, color: Colors.textMuted, fontWeight: Typography.fontWeightMedium, flex: 1 },
  watchBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: Radius.full,
  },
  watchBtnText: { fontSize: 12, fontWeight: Typography.fontWeightExtraBold, color: '#fff' },

  emptyWrap: { alignItems: 'center', paddingTop: 60, gap: 12 },
  emptyTitle: { fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightBold, color: Colors.textPrimary },
  emptySub: { fontSize: Typography.fontSizeSM, color: Colors.textSecondary },
});
