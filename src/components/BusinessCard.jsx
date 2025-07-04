import axios from "axios";

export default function BusinessCard({ data, refreshHeadline }) {
  return (
    <div className="border rounded-lg p-4 shadow-md space-y-2">
      <div><strong>Rating:</strong> {data.rating} ★</div>
      <div><strong>Reviews:</strong> {data.reviews}</div>
      <div><strong>SEO Headline:</strong> {data.headline}</div>
      <button className="btn-secondary" onClick={refreshHeadline}>
        Regenerate SEO Headline
      </button>
    </div>
  );
}
