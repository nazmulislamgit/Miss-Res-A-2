import { FiCheckSquare, FiClock, FiList, FiCheckCircle } from "react-icons/fi";
import { MdOutlineTaskAlt } from "react-icons/md";

const TaskStatus = ({ inProgressTickets, onComplete, resolvedTickets = [] }) => {
    return (
        <div className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-6 sticky top-24">
            {/* In-Progress Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-t-2xl px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FiList className="text-white text-xl" />
                        <h2 className="text-white font-bold text-lg">Task Status</h2>
                    </div>
                    <span className="bg-white/25 text-white text-sm font-bold px-2.5 py-0.5 rounded-full">
                        {inProgressTickets.length}
                    </span>
                </div>