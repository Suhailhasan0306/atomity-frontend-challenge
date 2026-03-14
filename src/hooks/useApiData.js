import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const users = await res.json();

  return [
    { id: 1, title: "CPU Usage", value: "72%" },
    { id: 2, title: "Active Instances", value: users.length },
    { id: 3, title: "Cost Saved", value: "$3200" },
    { id: 4, title: "System Efficiency", value: "94%" }
  ];
};

export const useApiData = () => {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5
  });
};