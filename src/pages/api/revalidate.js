export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    await res.revalidate('/');
    if (slug) {
      await res.revalidate(`/juego/${slug}`);
    }
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
