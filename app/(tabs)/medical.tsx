import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import { SearchBar, CollapsibleSection, FilterChips } from '@/components';
import ScreenHeader from '@/components/layout/ScreenHeader';
import {
  medicalInstitutes,
  publicHealthOrgs,
  medicalVideoCategories,
  ResourceItem,
} from '@/constants/data';

const VIDEO_TAB = 'videos';
const ORGS_TAB = 'orgs';

const ORG_CHIPS = ['Medical', 'WHO', 'Public Health', 'Vaccines', 'Clinical'];
const VIDEO_CATEGORY_CHIPS = ['Anatomy', 'Physiology', 'Pathology', 'Pharmacology', 'Microbiology', 'Morphology'];

export default function MedicalScreen() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(ORGS_TAB);
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);
  const [selectedVideoChips, setSelectedVideoChips] = useState<string[]>([]);

  const filterItems = (items: ResourceItem[]) => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  };

  const filteredMedical = useMemo(() => filterItems(medicalInstitutes), [search]);
  const filteredPublicHealth = useMemo(() => filterItems(publicHealthOrgs), [search]);

  const filteredVideoCategories = useMemo(() => {
    if (selectedVideoChips.length === 0 && !search.trim()) return medicalVideoCategories;
    return medicalVideoCategories
      .filter((cat) =>
        selectedVideoChips.length === 0 ||
        selectedVideoChips.some((chip) =>
          cat.title.toLowerCase().includes(chip.toLowerCase())
        )
      )
      .map((cat) => ({
        ...cat,
        videos: filterItems(cat.videos),
      }))
      .filter((cat) => cat.videos.length > 0);
  }, [search, selectedVideoChips]);

  const openURL = async (url: string) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (ok) await Linking.openURL(url);
      else Alert.alert('Cannot open URL', 'Unable to open this link.');
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  };

  const toggleOrg = (chip: string) =>
    setSelectedOrgs((prev) => prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]);
  const toggleVideo = (chip: string) =>
    setSelectedVideoChips((prev) => prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]);

  const TABS = [
    { id: ORGS_TAB, label: 'Organizations', icon: 'local-hospital' },
    { id: VIDEO_TAB, label: 'Video Library', icon: 'play-circle' },
  ];

  return (
    <View style={styles.root}>
      <ScreenHeader title="Medical Hub" subtitle="WHO, UNICEF, institutes & knowledge library" />

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <Pressable
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.tabActive]}
            onPress={() => setActiveTab(tab.id)}
            accessibilityRole="tab"
          >
            <MaterialIcons
              name={tab.icon as any}
              size={18}
              color={activeTab === tab.id ? Colors.primary : Colors.textMuted}
            />
            <Text style={[styles.tabLabel, activeTab === tab.id && styles.tabLabelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder={activeTab === ORGS_TAB ? 'Search medical organizations...' : 'Search video topics...'}
        />

        {activeTab === ORGS_TAB ? (
          <>
            <FilterChips chips={ORG_CHIPS} selected={selectedOrgs}
              onToggle={toggleOrg} onClearAll={() => setSelectedOrgs([])} />
            <CollapsibleSection
              title="International Medical Institutes"
              icon="local-hospital"
              color={Colors.catMedical}
              items={filteredMedical}
              defaultOpen={true}
            />
            <CollapsibleSection
              title="WHO, UNICEF & Public Health"
              icon="health-and-safety"
              color="#FF8C42"
              items={filteredPublicHealth}
              defaultOpen={false}
            />
          </>
        ) : (
          <>
            <FilterChips chips={VIDEO_CATEGORY_CHIPS} selected={selectedVideoChips}
              onToggle={toggleVideo} onClearAll={() => setSelectedVideoChips([])} />
            <Text style={styles.videoSectionTitle}>Medical Knowledge Video Library</Text>
            <Text style={styles.videoSectionSub}>
              Curated videos on anatomy, physiology, pathology, pharmacology, microbiology and more
            </Text>
            {filteredVideoCategories.map((cat) => (
              <View key={cat.id} style={styles.videoCategory}>
                <View style={styles.videoCatHeader}>
                  <View style={styles.videoCatIcon}>
                    <MaterialIcons name={cat.icon as any} size={20} color={Colors.catMedical} />
                  </View>
                  <Text style={styles.videoCatTitle}>{cat.title}</Text>
                  <View style={styles.videoCatBadge}>
                    <Text style={styles.videoCatCount}>{cat.videos.length}</Text>
                  </View>
                </View>
                {cat.videos.map((video) => (
                  <Pressable
                    key={video.id}
                    style={({ pressed }) => [styles.videoCard, pressed && { opacity: 0.7 }]}
                    onPress={() => openURL(video.url)}
                  >
                    <View style={styles.videoIconBg}>
                      <MaterialIcons name="play-arrow" size={22} color={Colors.catMedical} />
                    </View>
                    <View style={styles.videoInfo}>
                      <Text style={styles.videoTitle} numberOfLines={2}>{video.name}</Text>
                      <Text style={styles.videoDesc} numberOfLines={2}>{video.description}</Text>
                      <View style={styles.videoTags}>
                        {(video.tags || []).slice(0, 2).map((tag) => (
                          <View key={tag} style={styles.videoTag}>
                            <Text style={styles.videoTagText}>{tag}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    <MaterialIcons name="open-in-new" size={16} color={Colors.textMuted} />
                  </Pressable>
                ))}
              </View>
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
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: Spacing.md, marginTop: Spacing.md,
    backgroundColor: Colors.surfaceElevated, borderRadius: Radius.full,
    padding: 4, borderWidth: 1, borderColor: Colors.surfaceBorder,
  },
  tab: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', gap: 6, paddingVertical: 10, borderRadius: Radius.full,
  },
  tabActive: { backgroundColor: Colors.primary + '20' },
  tabLabel: { fontSize: Typography.fontSizeSM, fontWeight: Typography.fontWeightMedium, color: Colors.textMuted },
  tabLabelActive: { color: Colors.primary, fontWeight: Typography.fontWeightSemiBold },
  scroll: { paddingTop: Spacing.sm },
  videoSectionTitle: {
    fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightBold,
    color: Colors.textPrimary, marginHorizontal: Spacing.md, marginBottom: 4,
  },
  videoSectionSub: {
    fontSize: Typography.fontSizeXS, color: Colors.textSecondary,
    marginHorizontal: Spacing.md, marginBottom: Spacing.md, lineHeight: 18,
  },
  videoCategory: {
    marginHorizontal: Spacing.md, marginBottom: Spacing.md,
    backgroundColor: Colors.surface, borderRadius: Radius.lg,
    borderWidth: 1, borderColor: Colors.surfaceBorder, overflow: 'hidden',
  },
  videoCatHeader: {
    flexDirection: 'row', alignItems: 'center', padding: Spacing.md,
    gap: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.surfaceBorder,
  },
  videoCatIcon: {
    width: 36, height: 36, borderRadius: Radius.sm,
    backgroundColor: Colors.catMedical + '20',
    alignItems: 'center', justifyContent: 'center',
  },
  videoCatTitle: {
    flex: 1, fontSize: Typography.fontSizeBase,
    fontWeight: Typography.fontWeightBold, color: Colors.textPrimary,
  },
  videoCatBadge: { backgroundColor: Colors.catMedical + '20', paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full },
  videoCatCount: { fontSize: Typography.fontSizeXS, fontWeight: Typography.fontWeightBold, color: Colors.catMedical },
  videoCard: {
    flexDirection: 'row', alignItems: 'flex-start', padding: Spacing.md,
    gap: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.surfaceBorder,
  },
  videoIconBg: {
    width: 44, height: 44, borderRadius: Radius.md,
    backgroundColor: Colors.catMedical + '15',
    alignItems: 'center', justifyContent: 'center', marginTop: 2,
  },
  videoInfo: { flex: 1, gap: 4 },
  videoTitle: {
    fontSize: Typography.fontSizeSM, fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary, lineHeight: 18,
  },
  videoDesc: { fontSize: Typography.fontSizeXS, color: Colors.textSecondary, lineHeight: 16 },
  videoTags: { flexDirection: 'row', gap: 4, marginTop: 2 },
  videoTag: { paddingHorizontal: 7, paddingVertical: 2, borderRadius: Radius.full, backgroundColor: Colors.catMedical + '15' },
  videoTagText: { fontSize: 10, color: Colors.catMedical, fontWeight: Typography.fontWeightMedium },
});
