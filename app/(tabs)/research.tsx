import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing } from '@/constants/theme';
import { SearchBar, CollapsibleSection, FilterChips } from '@/components';
import ScreenHeader from '@/components/layout/ScreenHeader';
import {
  researchInstitutes,
  rdForums,
  rdCommunities,
  openAccessPlatforms,
  ResourceItem,
} from '@/constants/data';

const RESEARCH_CHIPS = ['Physics', 'Engineering', 'Biology', 'Medical', 'Tech', 'Open Access', 'Multidisciplinary'];
const FORUM_CHIPS = ['Open Access', 'Medical', 'Biology', 'Engineering', 'Multidisciplinary'];

export default function ResearchScreen() {
  const [search, setSearch] = useState('');
  const [selectedResearch, setSelectedResearch] = useState<string[]>([]);
  const [selectedForums, setSelectedForums] = useState<string[]>([]);

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
      result = result.filter(
        (i) =>
          selected.some(
            (s) =>
              (i.category || '').toLowerCase() === s.toLowerCase() ||
              (i.tags || []).some((t) => t.toLowerCase() === s.toLowerCase())
          )
      );
    }
    return result;
  };

  const filteredInstitutes = useMemo(() => filterItems(researchInstitutes, selectedResearch), [search, selectedResearch]);
  const filteredForums = useMemo(() => filterItems(rdForums, selectedForums), [search, selectedForums]);
  const filteredCommunities = useMemo(() => filterItems(rdCommunities, selectedForums), [search, selectedForums]);
  const filteredOpenAccess = useMemo(() => filterItems(openAccessPlatforms, selectedForums), [search, selectedForums]);

  const toggleResearch = (chip: string) =>
    setSelectedResearch((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );

  const toggleForums = (chip: string) =>
    setSelectedForums((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );

  return (
    <View style={styles.root}>
      <ScreenHeader title="Research" subtitle="Institutes, forums, communities & open access" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search research institutes, forums..."
        />

        {/* Institutes */}
        <FilterChips
          chips={RESEARCH_CHIPS}
          selected={selectedResearch}
          onToggle={toggleResearch}
          onClearAll={() => setSelectedResearch([])}
        />
        <CollapsibleSection
          title="International Research Institutes"
          icon="account-balance"
          color={Colors.catResearch}
          items={filteredInstitutes}
          defaultOpen={true}
        />

        {/* Forums */}
        <FilterChips
          chips={FORUM_CHIPS}
          selected={selectedForums}
          onToggle={toggleForums}
          onClearAll={() => setSelectedForums([])}
        />
        <CollapsibleSection
          title="R&D Forums & Preprint Servers"
          icon="forum"
          color={Colors.catCommunity}
          items={filteredForums}
          defaultOpen={false}
        />

        <CollapsibleSection
          title="International R&D Communities"
          icon="groups"
          color={Colors.catCommunity}
          items={filteredCommunities}
          defaultOpen={false}
        />

        <CollapsibleSection
          title="Public Domains & Open Access Platforms"
          icon="lock-open"
          color={Colors.catOpenAccess}
          items={filteredOpenAccess}
          defaultOpen={false}
        />

        <View style={{ height: Spacing.xl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingTop: Spacing.sm },
});
