import { AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from "react";
import useGameFilter from '@/hooks/useGameFilter';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function GameFilters({games, onChange = () => {}}) {

    const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false); 
  const [rating, setRating] = useState({ min: 0, max: 10 });

  useGameFilter(games, query, tags, rating, onChange);

  useEffect(() => {
    const getTags = () => {
      const uniqueTags = new Set();

      games.forEach(game => {
        game.tags.forEach(tag => {
          uniqueTags.add(tag);
        });
      });

      setAvailableTags(Array.from(uniqueTags));
    };
    getTags();
  }, [games]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleTagClick = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleRangeChange = (values) => {
    setRating(values);
  };

  const toggleFiltersVisible = () => {
    setFiltersVisible(!filtersVisible);
  };


    return (
        <>
            <div className="flex justify-end items-center mb-5">
                <button
                    className="text-white px-2 py-1 mr-2"
                    onClick={toggleFiltersVisible}
                >
                    <AdjustmentsVerticalIcon className={`h-6 w-6 ${filtersVisible ? `text-myPink` : `text-white`}`}/>
                </button>
            </div>
            {filtersVisible && (
                <>
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            id="search"
                            placeholder="Buscar por nombre"
                            value={query}
                            onChange={handleQueryChange}
                            className="bg-[#0a0a0a] border border-[#494949] rounded-lg py-3 px-3 w-full focus:border-myPink focus:outline-none focus:text-myPink"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center">
                        {availableTags.map((tag, index) => (
                            <button
                                key={index}
                                className={`${
                                    tags.includes(tag) ? "bg-myPink text-white" : ""
                                } px-2 py-1 rounded-lg border border-[#494949] mr-2`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>   
                        ))} 
                    </div>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center w-full">
                        <InputRange
                            minValue={0}
                            maxValue={10}
                            value={rating}
                            onChange={handleRangeChange}
                            formatLabel={(value) => `${value}`}
                        />
                    </div>
                </div>
                </>
            )}
        </>
    )
}