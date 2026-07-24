/**
 * Emits a Schema.org JSON-LD document.
 *
 * The payload is produced by our own builders in `lib/jsonld.ts` and already
 * serialised with JSON.stringify, so it contains no user input.
 */
export function JsonLd({ data }: { data: string }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />
  );
}
