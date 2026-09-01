import Button from '../atoms/Button';

export default function HeritageCard({ site }) {
  return (
    <article className="card">
      <img className="card-image" src={site.image} alt={site.alt} loading="lazy" />
      <div className="card-content">
        <h3>{site.name}</h3>
        <p className="location">{site.location}</p>
        <p>{site.description}</p>
        <Button href={`/heritage#${site.id}`}>View Details</Button>
      </div>
    </article>
  );
}
