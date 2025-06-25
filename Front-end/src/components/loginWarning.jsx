const LoginWarning = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-2 px-4">
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow text-center text-sm sm:text-base">
        <strong>Note:</strong> Login to save your tasks permanently. When not
        logged in, your tasks are only saved in your browser's localStorage and
        may be lost.
      </div>
    </div>
  );
};

export default LoginWarning;
