import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPages() {
    const query = useQuery();
    const search = query.get("search");
    
    const deboundSearch = useDebounce(search, 300);

  return (
    <div>
      <Search />
      <MoviesGrid key={deboundSearch} search={deboundSearch}/>
    </div>
  );
}
