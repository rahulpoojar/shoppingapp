const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-40 bg-gray-300 animate-pulse rounded-md mb-6"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
