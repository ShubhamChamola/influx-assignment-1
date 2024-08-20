export default function Card({ icon, title, text }) {
  return (
    <div className="shadow rounded-4 p-3 p-md-4 dark-bg h-100 d-flex flex-column">
      <div className="mb-3">{icon}</div>
      <div className="d-flex flex-column justify-content-center h-100">
        <h4 className="fs-5 text-green">{title}</h4>
        <p className="text-white text-opacity-50 fw-light fs-6 mb-0">{text}</p>
      </div>
    </div>
  );
}
