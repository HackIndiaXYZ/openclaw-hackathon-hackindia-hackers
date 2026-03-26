export default function TaskCard({ task }) {
  async function handleDelete() {
    await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    location.reload(); // temporary — replace later with state update
  }

  return (
    <div className="rounded-lg p-4 bg-white shadow border relative">

      {/* DELETE BUTTON */}
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        ✕
      </button>

      <h3 className="text-md font-semibold">{task.title}</h3>
      <p className="text-sm text-neutral-600">{task.description}</p>

      <div className="flex justify-between mt-3 text-xs text-neutral-500">
        <span>{task.status}</span>
        <span>{task.priority}</span>
      </div>
    </div>
  );
}