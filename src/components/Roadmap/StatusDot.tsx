import { MdCheck } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb";

type StatusDotProps = {
  completed: boolean;
  mobile?: boolean;
};

export function StatusDot({ completed, mobile = false }: StatusDotProps) {
  return (
    <div
      className={`
        rounded-full flex items-center justify-center border-2
        ${
          mobile
            ? "w-9 h-9 absolute right-2 top-2 md:hidden"
            : "w-12 h-12 absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex"
        }
        ${
          completed
            ? "bg-linear-[135deg] from-[#4f9cf9] to-[#7b6cf9] border-purple-900"
            : "bg-blue-500 border-purple-900"
        }
      `}
    >
      {completed ? (
        <MdCheck size={20} />
      ) : (
        <TbLoader3 size={20} className="animate-spin" />
      )}
    </div>
  );
}
