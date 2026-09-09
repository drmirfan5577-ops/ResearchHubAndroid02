import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { SearchBar, CollapsibleSection, FilterChips } from '@/components';
import ScreenHeader from '@/components/layout/ScreenHeader';
import {
  scientificJournals,
  seminarsVideos,
  copyrightFreeProviders,
  scientificLibraries,
  medicalLibraries,
  scientificVideoCollections,
  ResourceItem,
} from '@/constants/data';

const JOURNAL_CHIPS = ['Medical', 'Open Access', 'Physics', 'Biology', 'Multidisciplinary'];
const LIBRARY_CHIPS = ['Medical', 'Open Access', 'Physics', 'Biology', 'Engineering', 'Multidisciplinary'];
const VIDEO_CHIPS = ['Physics', 'Biology', 'Engineering', 'Tech', 'Multidisciplinary'];

export default function ResourcesScreen() {
  const [search, setSearch] = useState('');
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);

  const filterItems = (items: ResourceItem[], selected: string[]) => {
    let result = items;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          (i.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }
    if (selected.length > 0) {
      result = result.filter((i) =>
        selected.some(
          (s) =>
            (i.category || '').toLowerCase() === s.toLowerCase() ||
            (i.tags || []).some((t) => t.toLowerCase() === s.toLowerCase())
        )
      );
    }
    return result;
  };

  const filteredJournals = useMemo(() => filterItems(scientificJournals, selectedJournals), [search, selectedJournals]);
  const filteredSeminars = useMemo(() => filterItems(seminarsVideos, selectedVideos), [search, selectedVideos]);
  const filteredCopyright = useMemo(() => filterItems(copyrightFreeProviders, selectedLibraries), [search, selectedLibraries]);
  const filteredSciLib = useMemo(() => filterItems(scientificLibraries, selectedLibraries), [search, selectedLibraries]);
  const filteredMedLib = useMemo(() => filterItems(medicalLibraries, selectedLibraries), [search, selectedLibraries]);

  const filterSciVideoSections = useMemo(() => {
    if (selectedVideos.length === 0 && !search.trim()) return scientificVideoCollections;
    return scientificVideoCollections.map((cat) => ({
      ...cat,
      videos: filterItems(cat.videos, selectedVideos),
    })).filter((cat) => cat.videos.length > 0);
  }, [search, selectedVideos]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (chip: string) =>
    setter((prev) => prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]);

  return (
    <View style={styles.root}>
      <ScreenHeader title="Resources" subtitle="Journals, libraries, seminars & science videos" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search journals, libraries, resources..."
        />

        {/* Journals */}
        <FilterChips chips={JOURNAL_CHIPS} selected={selectedJournals}
          onToggle={toggle(setSelectedJournals)} onClearAll={() => setSelectedJournals([])} />
        <CollapsibleSection title="Scientific Journals" icon="menu-book"
          color={Colors.catJournal} items={filteredJournals} defaultOpen={true} />

        {/* Seminars */}
        <FilterChips chips={VIDEO_CHIPS} selected={selectedVideos}
          onToggle={toggle(setSelectedVideos)} onClearAll={() => setSelectedVideos([])} />
        <CollapsibleSection title="International Seminars & Lectures" icon="video-library"
          color={Colors.catVideo} items={filteredSeminars} defaultOpen={false} />

        {/* Scientific Video Collections */}
        <Text style={styles.sectionLabel}>Scientific Video Collections</Text>
        {filterSciVideoSections.map((cat) => (
          <CollapsibleSection
            key={cat.id}
            title={cat.title}
            icon={cat.icon}
            color={Colors.catResearch}
            items={cat.videos}
            defaultOpen={false}
          />
        ))}

        {/* Libraries */}
        <FilterChips chips={LIBRARY_CHIPS} selected={selectedLibraries}
          onToggle={toggle(setSelectedLibraries)} onClearAll={() => setSelectedLibraries([])} />
        <CollapsibleSection title="Global Scientific Libraries (25+)" icon="local-library"
          color="#7C6BFF" items={filteredSciLib} defaultOpen={false} />
        <CollapsibleSection title="Medical Libraries & Databases (12+)" icon="medical-services"
          color={Colors.catMedical} items={filteredMedLib} defaultOpen={false} />
        <CollapsibleSection title="Copyright-Free Content Providers" icon="folder-open"
          color={Colors.catCopyright} items={filteredCopyright} defaultOpen={false} />

        <View style={{ height: Spacing.xl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingTop: Spacing.sm },
  sectionLabel: {
    fontSize: Typography.fontSizeBase,
    fontWeight: Typography.fontWeightBold,
    color: Colors.textPrimary,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
  },
});
