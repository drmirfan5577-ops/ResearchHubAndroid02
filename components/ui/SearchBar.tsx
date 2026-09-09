import React, { memo } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar = memo(({ value, onChangeText, placeholder = 'Search resources...' }: SearchBarProps) => (
  <View style={styles.container}>
    <MaterialIcons name="search" size={20} color={Colors.textMuted} />
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.textMuted}
      returnKeyType="search"
      accessibilityLabel="Search input"
    />
    {value.length > 0 && (
      <Pressable onPress={() => onChangeText('')} hitSlop={8} accessibilityLabel="Clear search">
        <MaterialIcons name="close" size={18} color={Colors.textMuted} />
      </Pressable>
    )}
  </View>
));

SearchBar.displayName = 'SearchBar';
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceElevated,
    borderRadius: Radius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSizeBase,
    color: Colors.textPrimary,
    includeFontPadding: false,
  },
});
