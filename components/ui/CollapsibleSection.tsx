import React, { useState, memo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import ResourceCard from './ResourceCard';
import { ResourceItem } from '@/constants/data';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface CollapsibleSectionProps {
  title: string;
  icon: string;
  color: string;
  items: ResourceItem[];
  defaultOpen?: boolean;
  onBookmarkToggle?: (item: ResourceItem) => void;
  isBookmarked?: (id: string) => boolean;
}

const CollapsibleSection = memo(({
  title,
  icon,
  color,
  items,
  defaultOpen = false,
  onBookmarkToggle,
  isBookmarked,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.header, pressed && { opacity: 0.75 }]}
        onPress={toggle}
        accessibilityRole="button"
        accessibilityLabel={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
      >
        <View style={[styles.iconBg, { backgroundColor: color + '25' }]}>
          <MaterialIcons name={icon as any} size={18} color={color} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.countBadge, { backgroundColor: color + '20' }]}>
          <Text style={[styles.count, { color }]}>{items.length}</Text>
        </View>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={22}
          color={Colors.textSecondary}
        />
      </Pressable>

      {isOpen && (
        <View style={styles.itemList}>
          {items.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              accentColor={color}
              isBookmarked={isBookmarked ? isBookmarked(item.id) : false}
              onBookmarkToggle={onBookmarkToggle}
            />
          ))}
        </View>
      )}
    </View>
  );
});

CollapsibleSection.displayName = 'CollapsibleSection';
export default CollapsibleSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  iconBg: {
    width: 34, height: 34, borderRadius: Radius.sm,
    alignItems: 'center', justifyContent: 'center',
  },
  title: {
    flex: 1, fontSize: Typography.fontSizeBase,
    fontWeight: Typography.fontWeightSemiBold, color: Colors.textPrimary,
  },
  countBadge: {
    paddingHorizontal: 8, paddingVertical: 3, borderRadius: Radius.full,
  },
  count: { fontSize: Typography.fontSizeXS, fontWeight: Typography.fontWeightBold },
  itemList: {
    paddingHorizontal: Spacing.sm, paddingBottom: Spacing.sm,
  },
});
