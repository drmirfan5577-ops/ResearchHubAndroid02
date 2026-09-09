import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';

interface FilterChipsProps {
  chips: string[];
  selected: string[];
  onToggle: (chip: string) => void;
  onClearAll?: () => void;
}

const FilterChips = memo(({ chips, selected, onToggle, onClearAll }: FilterChipsProps) => {
  const handleToggle = useCallback((chip: string) => {
    onToggle(chip);
  }, [onToggle]);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {selected.length > 0 && onClearAll ? (
          <Pressable
            style={({ pressed }) => [styles.chip, styles.clearChip, pressed && { opacity: 0.7 }]}
            onPress={onClearAll}
            accessibilityLabel="Clear all filters"
            accessibilityRole="button"
          >
            <MaterialIcons name="close" size={13} color={Colors.error} />
            <Text style={styles.clearText}>Clear</Text>
          </Pressable>
        ) : null}
        {chips.map((chip) => {
          const isSelected = selected.includes(chip);
          return (
            <Pressable
              key={chip}
              style={({ pressed }) => [
                styles.chip,
                isSelected ? styles.chipSelected : styles.chipDefault,
                pressed && { opacity: 0.75 },
              ]}
              onPress={() => handleToggle(chip)}
              accessibilityLabel={`Filter by ${chip}`}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: isSelected }}
            >
              {isSelected ? (
                <MaterialIcons name="check" size={12} color={Colors.background} />
              ) : null}
              <Text style={[styles.chipText, isSelected ? styles.chipTextSelected : styles.chipTextDefault]}>
                {chip}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
});

FilterChips.displayName = 'FilterChips';
export default FilterChips;

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 52,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 34,
    paddingHorizontal: 12,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  chipDefault: {
    backgroundColor: Colors.surfaceElevated,
    borderColor: Colors.surfaceBorder,
  },
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  clearChip: {
    backgroundColor: Colors.error + '15',
    borderColor: Colors.error + '40',
  },
  chipText: {
    fontSize: 12,
    fontWeight: Typography.fontWeightSemiBold,
  },
  chipTextDefault: {
    color: Colors.textSecondary,
  },
  chipTextSelected: {
    color: Colors.background,
  },
  clearText: {
    fontSize: 12,
    fontWeight: Typography.fontWeightSemiBold,
    color: Colors.error,
  },
});
