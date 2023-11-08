interface LeaveCardProps {
  type: string;
  colorPie: string;
  available: number;
  used: number;
}

const LeaveCard: React.FC<LeaveCardProps> = ({
  type,
  available,
  used,
  colorPie,
}) => {
  // Calculate the percentage of used leave for the circular progress bar
  const total = available + used;
  const percentage = total ? (available / total) * 100 : 0;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white py-2 px-4 mx-1 my-5 w-48">
      <div className={`text-sm font-semibold ${colorPie}`}>{type}</div>
      <div className="flex items-center justify-between">
        <div className="relative mt-1">
          <svg
            className="transform -rotate-90 w-16 h-16 mx-auto"
            viewBox="0 0 42 42"
          >
            <circle
              className="text-gray-300"
              strokeWidth="3.8"
              fill="transparent"
              r="15.91549430918954"
              cx="21"
              cy="21"
            />
            <circle
              className={`${colorPie} stroke-current transition-all duration-500 ease-in-out`}
              strokeWidth="3.8"
              strokeDasharray={
                total ? `${percentage} ${100 - percentage}` : "100 0"
              }
              strokeDashoffset="25"
              strokeLinecap="round"
              fill="transparent"
              r="15.91549430918954"
              cx="21"
              cy="21"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-sm font-semibold">{`${available}/${total}`}</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-600">
            Available - {available}
          </div>
          <div className="text-sm font-medium text-gray-600 text-end">
            Used - {used}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
