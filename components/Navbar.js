import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [sortOrder, setSortOrder] = useState('name-asc');
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: '/medicines',
      query: {
        search,
        minPrice,
        maxPrice,
        manufacturer,
        sortOrder,
      },
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Medlr</a>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.filtersContainer}>
        <button onClick={toggleFilters}>Filters</button>
        {showFilters && (
          <div className={styles.filters}>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
            />
            <input
              type="text"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              placeholder="Manufacturer"
            />
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="name-asc">Name Ascending</option>
              <option value="name-desc">Name Descending</option>
              <option value="price-asc">Price Ascending</option>
              <option value="price-desc">Price Descending</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
