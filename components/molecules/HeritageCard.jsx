import Image from 'next/image';

export default function HeritageCard({ site }) {
  return (
    <article className="card heritage-card">

      {site.image && (
        <Image
          src={site.image}
          alt={site.name}
          width={800}
          height={500}
          className="heritage-image"
          sizes="(max-width: 640px) 92vw, (max-width: 900px) 44vw, 30vw"
        />
      )}

      <div className="heritage-card-content">

        <h3>
          {site.name}
        </h3>

        {site.location && (
          <strong className="heritage-location">
            {site.location}
          </strong>
        )}

        {site.description && (
          <p>
            {site.description}
          </p>
        )}

        <details className="heritage-details-wrapper">

          <summary className="button">
            View Details
          </summary>

          <div className="heritage-details">

            <div className="heritage-details-divider" />

            <h4>
              About {site.name}
            </h4>

            {site.details && (
              <p>
                {site.details}
              </p>
            )}

            {site.highlights?.length > 0 && (
              <div className="heritage-highlights">

                <h5>
                  Highlights
                </h5>

                <ul>
                  {site.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

              </div>
            )}

            {site.history && (
              <div className="heritage-extra">

                <h5>
                  History
                </h5>

                <p>
                  {site.history}
                </p>

              </div>
            )}

            {site.activities && (
              <div className="heritage-extra">

                <h5>
                  Things to Do
                </h5>

                <p>
                  {site.activities}
                </p>

              </div>
            )}

          </div>

        </details>

      </div>

    </article>
  );
}