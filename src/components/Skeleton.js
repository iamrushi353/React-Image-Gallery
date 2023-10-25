const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="bg-gray-300 p-5 rounded-3xl h-80"></div>
    </div>
  ));
};

export default Skeleton;
