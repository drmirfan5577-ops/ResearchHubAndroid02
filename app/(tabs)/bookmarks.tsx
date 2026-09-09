import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Linking,
  Alert,
  Share,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius } from '@/constants/theme';
import { useBookmarks } from '@/hooks/useBookmarks';
import ScreenHeader from '@/components/layout/ScreenHeader';
import ResourceCard from '@/components/ui/ResourceCard';

export default function BookmarksScreen() {
  const insets = useSafeAreaInsets();
  const { bookmarks, loading, removeBookmark, toggleBookmark, isBookmarked } = useBookmarks();

  const openURL = useCallback(async (url: string) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (ok) await Linking.openURL(url);
      else Alert.alert('Cannot open URL', 'Unable to open this link.');
    } catch {
      Alert.alert('Error', 'Failed to open the link.');
    }
  }, []);

  const shareItem = useCallback(async (name: string, description: string, url: string) => {
    try {
      await Share.share({ title: name, message: `${name}\n${description}\n\n${url}`, url });
    } catch { }
  }, []);

  const confirmRemove = (id: string, name: string) => {
    Alert.alert(
      'Remove Bookmark',
      `Remove "${name}" from bookmarks?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => removeBookmark(id) },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.root}>
        <ScreenHeader title="Bookmarks" subtitle="Your saved resources" />
        <View style={styles.center}>
          <Text style={styles.emptyText}>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Bookmarks"
        subtitle={`${bookmarks.length} saved resource${bookmarks.length !== 1 ? 's' : ''}`}
      />
      {bookmarks.length === 0 ? (
        <View style={styles.center}>
          <View style={styles.emptyIcon}>
            <MaterialIcons name="bookmark-border" size={52} color={Colors.textMuted} />
          </View>
          <Text style={styles.emptyTitle}>No Bookmarks Yet</Text>
          <Text style={styles.emptyText}>
            Tap the bookmark icon on any resource card to save it here for quick access.
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cardWrap}>
              <ResourceCard
                item={item}
                accentColor={Colors.primary}
                isBookmarked={isBookmarked(item.id)}
                onBookmarkToggle={() => confirmRemove(item.id, item.name)}
              />
              <View style={styles.cardActions}>
                <Pressable
                  style={({ pressed }) => [styles.actionBtn, pressed && { opacity: 0.7 }]}
                  onPress={() => shareItem(item.name, item.description, item.url)}
                >
                  <MaterialIcons name="share" size={16} color={Colors.primary} />
                  <Text style={styles.actionText}>Share</Text>
                </Pressable>
                <Pressable
                  style={({ pressed }) => [styles.actionBtn, styles.removeBtn, pressed && { opacity: 0.7 }]}
                  onPress={() => confirmRemove(item.id, item.name)}
                >
                  <MaterialIcons name="bookmark-remove" size={16} color={Colors.error} />
                  <Text style={[styles.actionText, { color: Colors.error }]}>Remove</Text>
                </Pressable>
              </View>
            </View>
          )}
          ListFooterComponent={<View style={{ height: Spacing.xl }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  center: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyIcon: {
    width: 96, height: 96, borderRadius: 48,
    backgroundColor: Colors.surfaceElevated,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.md,
    borderWidth: 1, borderColor: Colors.surfaceBorder,
  },
  emptyTitle: {
    fontSize: Typography.fontSizeMD, fontWeight: Typography.fontWeightBold,
    color: Colors.textPrimary, marginBottom: Spacing.sm,
  },
  emptyText: {
    fontSize: Typography.fontSizeSM, color: Colors.textSecondary,
    textAlign: 'center', lineHeight: 20,
  },
  list: { paddingTop: Spacing.md, paddingHorizontal: Spacing.md },
  cardWrap: { marginBottom: 4 },
  cardActions: {
    flexDirection: 'row', gap: Spacing.sm,
    marginBottom: Spacing.md, marginTop: -4,
    paddingHorizontal: 4,
  },
  actionBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: Radius.full,
    backgroundColor: Colors.primary + '15',
    borderWidth: 1, borderColor: Colors.primary + '30',
  },
  removeBtn: {
    backgroundColor: Colors.error + '12',
    borderColor: Colors.error + '30',
  },
  actionText: {
    fontSize: Typography.fontSizeXS, fontWeight: Typography.fontWeightSemiBold,
    color: Colors.primary,
  },
});
