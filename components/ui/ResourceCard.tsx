import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Alert,
  Share,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import { ResourceItem } from '@/constants/data';

interface ResourceCardProps {
  item: ResourceItem;
  accentColor?: string;
  compact?: boolean;
  isBookmarked?: boolean;
  onBookmarkToggle?: (item: ResourceItem) => void;
}

const ResourceCard = memo(({
  item,
  accentColor = Colors.primary,
  compact = false,
  isBookmarked = false,
  onBookmarkToggle,
}: ResourceCardProps) => {
  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(item.url);
      if (supported) {
        await Linking.openURL(item.url);
      } else {
        Alert.alert('Cannot open URL', 'Unable to open this link on your device.');
      }
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        title: item.name,
        message: `${item.name}\n${item.description}\n\n${item.url}`,
        url: item.url,
      });
    } catch {
      // silent
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={handlePress}
      accessibilityLabel={`Open ${item.name}`}
      accessibilityRole="link"
    >
      <View style={[styles.accentBar, { backgroundColor: accentColor }]} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={compact ? 1 : 2}>{item.name}</Text>
          <View style={styles.actions}>
            {onBookmarkToggle ? (
              <Pressable
                hitSlop={8}
                onPress={() => onBookmarkToggle(item)}
                accessibilityLabel={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                <MaterialIcons
                  name={isBookmarked ? 'bookmark' : 'bookmark-border'}
                  size={18}
                  color={isBookmarked ? accentColor : Colors.textMuted}
                />
              </Pressable>
            ) : null}
            <Pressable hitSlop={8} onPress={handleShare} accessibilityLabel="Share">
              <MaterialIcons name="share" size={16} color={Colors.textMuted} />
            </Pressable>
            <MaterialIcons name="open-in-new" size={16} color={accentColor} />
          </View>
        </View>
        {!compact && (
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        )}
        {item.tags && item.tags.length > 0 && !compact && (
          <View style={styles.tags}>
            {item.tags.slice(0, 3).map((tag) => (
              <View key={tag} style={[styles.tag, { borderColor: accentColor + '40' }]}>
                <Text style={[styles.tagText, { color: accentColor }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );
});

ResourceCard.displayName = 'ResourceCard';
export default ResourceCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.surfaceElevated,
    borderRadius: Radius.md,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
  },
  cardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  accentBar: {
    width: 4,
    minHeight: 60,
  },
  content: {
    flex: 1,
    padding: Spacing.md,
    gap: Spacing.xs,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  name: {
    flex: 1,
    fontSize: Typography.fontSizeSM,
    fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  description: {
    fontSize: Typography.fontSizeXS,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
    marginTop: Spacing.xs,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 10,
    fontWeight: Typography.fontWeightMedium,
  },
});
