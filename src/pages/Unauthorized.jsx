import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {

  const back=useNavigate()
  const handleback=()=>{
    back(-1)
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">403 🚫</h1>
      <p className="mb-6">You do not have permission to access this page.</p>
      <button onClick={handleback} className="bg-gray-600 py-2 rounded-lg hover:bg-gray-400">Go Back</button>
    </div>
  );
};

export default Unauthorized;
