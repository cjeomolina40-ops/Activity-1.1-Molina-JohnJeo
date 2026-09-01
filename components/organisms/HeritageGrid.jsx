import HeritageCard from '@/components/molecules/HeritageCard';

export default function HeritageGrid({ sites }) {
  return (
    <div className="heritage-grid">
      {sites.map((site) => (
        <HeritageCard
          key={site.id}
          site={site}
        />
      ))}
    </div>
  );
}