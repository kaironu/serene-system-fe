import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/types';

interface CollectionHeroProps {
  collection: Collection;
}

export default function CollectionHero({ collection }: CollectionHeroProps) {
  return (
    <section className="relative h-96 overflow-hidden rounded-lg mb-8">
      <Image
        src={collection.banner || collection.image}
        alt={collection.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          {collection.name}
        </h1>
        <p className="text-white text-lg mb-6">
          {collection.description}
        </p>
        <Link
          href={`/collections/${collection.slug}`}
          className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100"
        >
          Xem bộ sưu tập
        </Link>
      </div>
    </section>
  );
}
