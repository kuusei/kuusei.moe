import LoadingIcon from "@/components/icons/loading";

export default function Loading() {
  return (
    <p className="flex items-center">
      <LoadingIcon className="mr-2 inline animate-spin text-sm" aria-hidden />
      <span>Loading...</span>
    </p>
  );
}
