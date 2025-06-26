import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(25, "Maximum 25 characters"),
  description: z.string().min(3, "Minimum 3 characters"),
});
const AddTaskForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-gray-100 rounded-xl shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Task title"
            {...register("title")}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.title && (
            <p className="text-red-500 sm:hidden">{errors.title.message}</p>
          )}
          <textarea
            placeholder="Task details"
            {...register("description")}
            className="px-4 py-2 border border-gray-300 resize-none h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.description && (
            <p className="text-red-500 sm:hidden">
              {errors.description.message}
            </p>
          )}
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Add
          </button>
        </div>
        {(errors.title || errors.description) && (
          <div className="sm:grid  hidden grid-cols-3 gap-4 text-sm">
            <div>
              {errors?.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div>
              {errors?.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTaskForm;
