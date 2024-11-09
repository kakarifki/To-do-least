

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col justify-center mr-6">
                    <h1 className="text-2xl font-bold mb-2">Name: Rifki Septiawan</h1>
                    <p className="text-lg">Job: Software Eng</p>
                </div>
                <div>
                    <img 
                        src="https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc" 
                        alt="Profile" 
                        className="w-40 h-40 object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage