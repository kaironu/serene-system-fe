'use client';

interface RatingProps {
  rating: number;
  reviewCount: number;
}

export function Rating({ rating, reviewCount }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={
            i < fullStars
              ? 'text-yellow-400 text-lg'
              : 'text-gray-300 text-lg'
          }>
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} ({reviewCount} đánh giá)
      </span>
    </div>
  );
}
