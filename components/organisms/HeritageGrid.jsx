import HeritageCard from '../molecules/HeritageCard';

export default function HeritageGrid({ sites }) {
  return (
    <div className="grid">
      {sites.map((site) => (
        <HeritageCard key={site.id} site={site} />
      ))}
    </div>
  );
}
