import React, { useState, useEffect } from 'react';
import { Product, productList } from '../datas/productList'; // import de la liste des produits
import '../styles/Search.scss'
import { Link } from "react-router-dom"
import loupe from '../images/loupe.svg'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // parcours de la liste des produits pour trouver ceux qui correspondent à la recherche
    const results:any = productList.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    if (event.target.value.length > 0){
        setShowResults(true);
    } else {
        setShowResults(false);
    }
  };

  const handleParentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowResults(true);
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      if (!event.target.closest('#search-container')) {
        setShowResults(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <div className='Search' tabIndex={0} onClick={handleParentClick}>
      <input
        type="text"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={handleChange}
        className="Search_input"
      />
      <img className='Search_loupe' src={loupe}></img>

      {showResults && (
      <div className='Search_results'>
      {searchResults.length > 0 ?
      searchResults.map((product:any) => (
        <Link to={`/detail/id=${product.id}`} className="Search_item">
            <div>{product.name}</div>
        </Link>)) : <p>Aucun résultat</p>}
      </div>)}

    </div>
  );
}

export default SearchBar;

