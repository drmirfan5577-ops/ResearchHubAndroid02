import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Linking,
  Alert,
  Share,
} from 'react-native';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import { SearchBar, NewsCard } from '@/components';
import {
  homeSections,
  researchInstitutes,
  rdForums,
  scientificJournals,
  seminarsVideos,
  rdCommunities,
  openAccessPlatforms,
  copyrightFreeProviders,
  medicalInstitutes,
  publicHealthOrgs,
  scientificLibraries,
  medicalLibraries,
  newsFeed,
  ResourceItem,
} from '@/constants/data';

const ALL_ITEMS: ResourceItem[] = [
  ...researchInstitutes,
  ...rdForums,
  ...scientificJournals,
  ...seminarsVideos,
  ...rdCommunities,
  ...openAccessPlatforms,
  ...copyrightFreeProviders,
  ...medicalInstitutes,
  ...publicHealthOrgs,
  ...scientificLibraries,
  ...medicalLibraries,
];

const STATS = [
  { label: 'Institutes', value: '20+', icon: 'account-balance', color: Colors.primary },
  { label: 'Journals', value: '14+', icon: 'menu-book', color: '#7C6BFF' },
  { label: 'Libraries', value: '37+', icon: 'local-library', color: '#FF8C42' },
  { label: 'Videos', value: '55+', icon: 'smart-display', color: Colors.catVideo },
  { label: 'Resources', value: '150+', icon: 'link', color: Colors.accent },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags || []).some((t) => t.toLowerCase().includes(q))
    ).slice(0, 20);
  }, [search]);

  const openURL = useCallback(async (url: string) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (ok) await Linking.openURL(url);
      else Alert.alert('Cannot open URL', 'Unable to open this link.');
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  }, []);

  const shareItem = useCallback(async (name: string, url: string) => {
    try {
      await Share.share({ title: name, message: `${name}\n\n${url}`, url });
    } catch { }
  }, []);

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Research & Analytics Hub</Text>
          <Text style={styles.headerSub}>Global knowledge at your fingertips</Text>
        </View>
        <View style={styles.headerIconBg}>
          <MaterialIcons name="hub" size={26} color={Colors.primary} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image
            source={require('@/assets/images/hero-banner.png')}
            style={styles.heroImage}
            contentFit="cover"
            transition={300}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Explore 150+ Curated Resources</Text>
            <Text style={styles.heroSub}>Institutes • Journals • Libraries • Medical • Open Access</Text>
          </View>
        </View>

        {/* Search */}
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search institutes, journals, libraries..."
        />

        {/* Search Results */}
        {search.trim().length > 0 ? (
          <View style={styles.searchResults}>
            <Text style={styles.resultsLabel}>
              {searchResults.length > 0 ? `${searchResults.length} results` : 'No results found'}
            </Text>
            {searchResults.map((item) => (
              <Pressable
                key={item.id}
                style={({ pressed }) => [styles.resultCard, pressed && { opacity: 0.7 }]}
                onPress={() => openURL(item.url)}
              >
                <View style={styles.resultContent}>
                  <Text style={styles.resultName} numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.resultDesc} numberOfLines={1}>{item.description}</Text>
                </View>
                <Pressable hitSlop={8} onPress={() => shareItem(item.name, item.url)}>
                  <MaterialIcons name="share" size={15} color={Colors.textMuted} />
                </Pressable>
                <MaterialIcons name="open-in-new" size={16} color={Colors.primary} />
              </Pressable>
            ))}
          </View>
        ) : (
          <>
            {/* Stats Strip */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.statsRow}
            >
              {STATS.map((s) => (
                <View key={s.label} style={[styles.statCard, { borderColor: s.color + '40' }]}>
                  <MaterialIcons name={s.icon as any} size={22} color={s.color} />
                  <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
                  <Text style={styles.statLabel}>{s.label}</Text>
                </View>
              ))}
            </ScrollView>

            {/* Latest News */}
            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Latest Research News</Text>
              <Pressable onPress={() => router.push('/(tabs)/resources' as any)}>
                <Text style={styles.seeAll}>See all</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.newsRow}
            >
              {newsFeed.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </ScrollView>

            {/* Section Grid */}
            <Text style={[styles.sectionTitle, { marginTop: Spacing.md }]}>Browse by Category</Text>
            <View style={styles.grid}>
              {homeSections.map((section) => (
                <Pressable
                  key={section.id}
                  style={({ pressed }) => [
                    styles.gridCard,
                    { borderColor: section.color + '30' },
                    pressed && { opacity: 0.75, transform: [{ scale: 0.97 }] },
                  ]}
                  onPress={() => router.push(section.route as any)}
                  accessibilityRole="button"
                >
                  <View style={[styles.gridIcon, { backgroundColor: section.color + '20' }]}>
                    <MaterialIcons name={section.icon as any} size={22} color={section.color} />
                  </View>
                  <Text style={styles.gridTitle} numberOfLines={2}>{section.title}</Text>
                  <Text style={[styles.gridCount, { color: section.color }]}>{section.count} links</Text>
                </Pressable>
              ))}
            </View>

            {/* Quick Access */}
            <Text style={styles.sectionTitle}>Quick Access</Text>
            {[
              { name: 'PubMed – Biomedical Literature', url: 'https://pubmed.ncbi.nlm.nih.gov', icon: 'biotech', color: Colors.primary },
              { name: 'WHO – World Health Organization', url: 'https://www.who.int', icon: 'local-hospital', color: '#FF6B9D' },
              { name: 'arXiv – Open Preprints', url: 'https://arxiv.org', icon: 'science', color: '#7C6BFF' },
              { name: 'Google Scholar', url: 'https://scholar.google.com', icon: 'search', color: Colors.accent },
              { name: 'UNICEF – Child Health', url: 'https://www.unicef.org/health', icon: 'child-care', color: Colors.accentGold },
              { name: 'Internet Archive – Science', url: 'https://archive.org/details/science', icon: 'local-library', color: '#FF8C42' },
            ].map((link) => (
              <Pressable
                key={link.url}
                style={({ pressed }) => [styles.quickCard, pressed && { opacity: 0.7 }]}
                onPress={() => openURL(link.url)}
              >
                <View style={[styles.quickIcon, { backgroundColor: link.color + '20' }]}>
                  <MaterialIcons name={link.icon as any} size={20} color={link.color} />
                </View>
                <Text style={styles.quickName} numberOfLines={1}>{link.name}</Text>
                <Pressable hitSlop={8} onPress={() => shareItem(link.name, link.url)}>
                  <MaterialIcons name="share" size={15} color={Colors.textMuted} />
                </Pressable>
                <MaterialIcons name="open-in-new" size={16} color={Colors.textMuted} />
              </Pressable>
            ))}
          </>
        )}
        <View style={{ height: Spacing.xl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surfaceBorder,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: Typography.fontWeightExtraBold,
    color: Colors.textPrimary,
    letterSpacing: 0.2,
  },
  headerSub: {
    fontSize: Typography.fontSizeXS,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  headerIconBg: {
    width: 44, height: 44, borderRadius: Radius.md,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center', justifyContent: 'center',
  },
  scroll: { paddingTop: Spacing.md },
  heroBanner: {
    marginHorizontal: Spacing.md, marginBottom: Spacing.md,
    borderRadius: Radius.lg, overflow: 'hidden', height: 180,
  },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6,13,31,0.6)',
    justifyContent: 'flex-end', padding: Spacing.md,
  },
  heroTitle: {
    fontSize: Typography.fontSizeLG, fontWeight: Typography.fontWeightExtraBold,
    color: Colors.textPrimary,
  },
  heroSub: {
    fontSize: Typography.fontSizeXS, color: Colors.primary,
    marginTop: 4, fontWeight: Typography.fontWeightMedium,
  },
  searchResults: { marginHorizontal: Spacing.md, marginBottom: Spacing.md },
  resultsLabel: {
    fontSize: Typography.fontSizeXS, color: Colors.textMuted,
    marginBottom: Spacing.sm, fontWeight: Typography.fontWeightMedium,
  },
  resultCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surfaceElevated, borderRadius: Radius.md,
    padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1, borderColor: Colors.surfaceBorder, gap: Spacing.sm,
  },
  resultContent: { flex: 1 },
  resultName: {
    fontSize: Typography.fontSizeSM, fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary,
  },
  resultDesc: { fontSize: Typography.fontSizeXS, color: Colors.textSecondary, marginTop: 2 },
  statsRow: {
    paddingHorizontal: Spacing.md, gap: Spacing.sm, marginBottom: Spacing.md,
  },
  statCard: {
    alignItems: 'center', backgroundColor: Colors.surfaceElevated,
    borderRadius: Radius.md, paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 4, minWidth: 80, borderWidth: 1, gap: 4,
  },
  statValue: { fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightExtraBold },
  statLabel: { fontSize: 10, color: Colors.textSecondary, fontWeight: Typography.fontWeightMedium },
  sectionRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
  },
  sectionTitle: {
    fontSize: Typography.fontSizeBase, fontWeight: Typography.fontWeightBold,
    color: Colors.textPrimary, marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
  },
  seeAll: {
    fontSize: Typography.fontSizeXS, color: Colors.primary,
    fontWeight: Typography.fontWeightSemiBold,
  },
  newsRow: {
    paddingHorizontal: Spacing.md, gap: Spacing.sm, paddingBottom: 4,
  },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: Spacing.md, gap: Spacing.sm, marginBottom: Spacing.md,
  },
  gridCard: {
    width: '31%', backgroundColor: Colors.surface, borderRadius: Radius.md,
    padding: Spacing.sm, alignItems: 'center', borderWidth: 1, gap: 6,
  },
  gridIcon: {
    width: 44, height: 44, borderRadius: Radius.md,
    alignItems: 'center', justifyContent: 'center',
  },
  gridTitle: {
    fontSize: 11, fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary, textAlign: 'center', lineHeight: 14,
  },
  gridCount: { fontSize: 10, fontWeight: Typography.fontWeightMedium },
  quickCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: Radius.md,
    marginHorizontal: Spacing.md, marginBottom: Spacing.sm,
    padding: Spacing.md, gap: Spacing.sm,
    borderWidth: 1, borderColor: Colors.surfaceBorder,
  },
  quickIcon: {
    width: 36, height: 36, borderRadius: Radius.sm,
    alignItems: 'center', justifyContent: 'center',
  },
  quickName: {
    flex: 1, fontSize: Typography.fontSizeSM,
    fontWeight: Typography.fontWeightMedium, color: Colors.textPrimary,
  },
});
