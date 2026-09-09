import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import { NewsItem } from '@/constants/data';

interface NewsCardProps {
  item: NewsItem;
  compact?: boolean;
}

const NewsCard = memo(({ item, compact = false }: NewsCardProps) => {
  const open = useCallback(async () => {
    try {
      const ok = await Linking.canOpenURL(item.url);
      if (ok) await Linking.openURL(item.url);
      else Alert.alert('Cannot open URL', 'Unable to open this link.');
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  }, [item.url]);

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.72, transform: [{ scale: 0.98 }] }]}
      onPress={open}
      accessibilityRole="link"
      accessibilityLabel={item.title}
    >
      <View style={[styles.sourceTag, { backgroundColor: item.color + '25' }]}>
        <MaterialIcons name={item.icon as any} size={12} color={item.color} />
        <Text style={[styles.sourceText, { color: item.color }]}>{item.source}</Text>
      </View>
      {!compact && (
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      )}
      {compact && (
        <Text style={styles.titleCompact} numberOfLines={1}>{item.title}</Text>
      )}
      <View style={styles.footer}>
        <Text style={styles.date}>{item.date}</Text>
        <MaterialIcons name="open-in-new" size={13} color={Colors.textMuted} />
      </View>
    </Pressable>
  );
});

NewsCard.displayName = 'NewsCard';
export default NewsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    gap: 8,
    minWidth: 220,
    maxWidth: 300,
  },
  sourceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radius.full,
  },
  sourceText: {
    fontSize: 10,
    fontWeight: Typography.fontWeightBold,
  },
  title: {
    fontSize: Typography.fontSizeSM,
    fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary,
    lineHeight: 18,
  },
  titleCompact: {
    fontSize: Typography.fontSizeXS,
    fontWeight: Typography.fontWeightSemiBold,
    color: Colors.textPrimary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 10,
    color: Colors.textMuted,
    fontWeight: Typography.fontWeightMedium,
  },
});
