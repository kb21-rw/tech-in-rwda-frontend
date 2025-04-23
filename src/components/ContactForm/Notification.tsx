const Notification = ({ message, type }: { message: string; type: 'success' | 'error' }) => {
  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg font-mulish text-sm font-normal leading-5 ${
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
      }`}>
        {message}
      </div>
  );
};

export default Notification;