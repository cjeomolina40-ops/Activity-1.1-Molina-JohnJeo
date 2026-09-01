
import HeritageSearch from '@/components/organisms/HeritageSearch';
import { sites } from '@/data';

export default function Heritage() {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <h1>Heritage Sites</h1>
          <p>
            Browse destinations featured in the Pangasinan Heritage Digital
            Showcase.
          </p>
        </div>
      </section>

      <HeritageSearch sites={sites} />
    </main>
  );
}

