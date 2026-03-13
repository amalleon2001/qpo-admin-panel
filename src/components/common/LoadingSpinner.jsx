function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-50 gap-3">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
      <p className="text-gray-500 text-sm m-0">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
