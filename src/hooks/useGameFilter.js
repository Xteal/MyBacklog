import { useEffect } from "react";

function useGameFilter(games, query, selectedTags, rating, onFilterChange) {

  useEffect(() => {
    const filtered = games.filter((game) => {
        if (rating && (game.score < rating.min || game.score > rating.max)) {
            return false;
        }

        if (query && !game.name.toLowerCase().includes(query.toLowerCase())) {
            return false;
        }

        if (selectedTags.length > 0 && !selectedTags.every((tag) => game.tags.includes(tag))) {
            return false;
        }

      return true;
    });
    onFilterChange(filtered);
  }, [games, query, selectedTags, rating]);

  return {  };
}

export default useGameFilter;