
import search from "../assets/search.svg"
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return ( 
        <div className="bg-white flex md:hidden items-center px-2">
            <input type="text" className=" placeholder-black outline-none border-none" placeholder="search" />
            <img src={search} className="text-black" alt="" />
            <AiOutlineSearch className="text-black font-extralight" />
        </div>
     );
}
 
export default Search;