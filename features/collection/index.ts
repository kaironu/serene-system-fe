import { Collection } from '@/types';
import { collectionAPI } from '@/lib/api';

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  try {
    return (await collectionAPI.getBySlug(slug)) as Collection | null;
  } catch (error) {
    return null;
  }
}

export async function getAllCollections(): Promise<Collection[]> {
  try {
    return (await collectionAPI.getAll()) as Collection[];
  } catch (error) {
    return [];
  }
}
