'use client';

import { useState } from 'react';

export default function HeritageCard({ site }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((current) => !current);
  };

  return (
    <article
      className={`card heritage-card ${
        showDetails ? 'is-expanded' : ''
      }`}
    >

      {/* =========================
          IMAGE
      ========================= */}

      {site.image && (
        <img
          src={site.image}
          alt={site.name}
          className="heritage-image"
        />
      )}


      {/* =========================
          CARD CONTENT
      ========================= */}

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


        {/* =========================
            VIEW DETAILS
        ========================= */}

        <button
          type="button"
          className="button"
          onClick={toggleDetails}
          aria-expanded={showDetails}
          aria-controls={`details-${site.id}`}
        >
          {showDetails
            ? 'Hide Details'
            : 'View Details'}
        </button>


        {/* =========================
            EXPANDED DETAILS
        ========================= */}

        {showDetails && (
          <div
            id={`details-${site.id}`}
            className="heritage-details"
          >

            <div className="heritage-details-divider" />

            <h4>
              About {site.name}
            </h4>


            {site.details && (
              <p>
                {site.details}
              </p>
            )}


            {/* =====================
                HIGHLIGHTS
            ===================== */}

            {site.highlights &&
              site.highlights.length > 0 && (
                <div className="heritage-highlights">

                  <h5>
                    Highlights
                  </h5>

                  <ul>
                    {site.highlights.map(
                      (highlight, index) => (
                        <li key={index}>
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>

                </div>
              )}


            {/* =====================
                HISTORY
            ===================== */}

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


            {/* =====================
                ACTIVITIES
            ===================== */}

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
        )}

      </div>

    </article>
  );
}