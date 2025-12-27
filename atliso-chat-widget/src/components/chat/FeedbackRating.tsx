import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FeedbackRatingProps {
  rating?: number;
  onRatingChange: (rating: number) => void;
  disabled?: boolean;
}

export function FeedbackRating({ rating, onRatingChange, disabled = false }: FeedbackRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-sm text-gray-600 font-medium">Rate this conversation:</p>
      <div className="flex space-x-1">
        {stars.map((star) => (
          <button
            key={star}
            onClick={() => !disabled && onRatingChange(star)}
            disabled={disabled}
            className={cn(
              "p-1 rounded transition-all",
              !disabled && "hover:scale-110 cursor-pointer",
              disabled && "cursor-not-allowed opacity-60"
            )}
            aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
          >
            <Star
              className={cn(
                "w-6 h-6 transition-colors",
                rating && star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-300"
              )}
            />
          </button>
        ))}
      </div>
      {rating && (
        <p className="text-xs text-gray-500">
          You rated this {rating} star{rating !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
