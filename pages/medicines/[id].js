import { useRouter } from 'next/router';
import { getMedicineData } from '../../utils/readCsv';
import styles from '../../styles/Medicine.module.css';

const Medicine = ({ medicine }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{medicine.name}</h1>
      <p>Price: ${medicine.price}</p>
      <p>Manufacturer: {medicine.manufacturer}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export async function getStaticPaths() {
  const medicines = await getMedicineData();
  const paths = medicines.map(medicine => ({
    params: { id: medicine.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const medicines = await getMedicineData();
  const medicine = medicines.find(m => m.id.toString() === params.id);

  return {
    props: {
      medicine
    }
  };
}

export default Medicine;
