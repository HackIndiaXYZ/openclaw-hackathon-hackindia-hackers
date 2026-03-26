import useTaskModal from "@/store/useTaskModal";

export default function TaskNavbar() {
  const modal = useTaskModal();

  return (
    <div className="h-16 border-b px-6 flex items-center justify-between bg-white">
      <h1 className="text-xl font-semibold">Task Management</h1>

      <button
        onClick={modal.open}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        + New Task
      </button>
    </div>
  );
}