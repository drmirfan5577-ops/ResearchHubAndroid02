import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ResourceItem } from '@/constants/data';

const STORAGE_KEY = '@research_hub_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) {
        setBookmarks(JSON.parse(raw));
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  const saveBookmarks = async (items: ResourceItem[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // silent fail
    }
  };

  const addBookmark = useCallback(async (item: ResourceItem) => {
    setBookmarks((prev) => {
      if (prev.find((b) => b.id === item.id)) return prev;
      const updated = [item, ...prev];
      saveBookmarks(updated);
      return updated;
    });
  }, []);

  const removeBookmark = useCallback(async (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      saveBookmarks(updated);
      return updated;
    });
  }, []);

  const toggleBookmark = useCallback(async (item: ResourceItem) => {
    setBookmarks((prev) => {
      const exists = prev.find((b) => b.id === item.id);
      const updated = exists ? prev.filter((b) => b.id !== item.id) : [item, ...prev];
      saveBookmarks(updated);
      return updated;
    });
  }, []);

  const isBookmarked = useCallback(
    (id: string) => bookmarks.some((b) => b.id === id),
    [bookmarks]
  );

  return { bookmarks, loading, addBookmark, removeBookmark, toggleBookmark, isBookmarked };
}
