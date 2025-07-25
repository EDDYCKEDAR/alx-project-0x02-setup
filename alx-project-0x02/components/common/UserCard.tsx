import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">@{username}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </div>
        
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Phone:</span>
          <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
            {phone}
          </a>
        </div>
        
        <div className="flex items-center text-gray-600">
          <span className="font-medium mr-2">Website:</span>
          <a 
            href={`http://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Address</h4>
        <p className="text-gray-600 text-sm">
          {address.suite} {address.street}<br />
          {address.city}, {address.zipcode}
        </p>
      </div>
      
      <div>
        <h4 className="font-medium text-gray-800 mb-2">Company</h4>
        <p className="text-gray-800 font-medium">{company.name}</p>
        <p className="text-gray-600 text-sm italic">"{company.catchPhrase}"</p>
        <p className="text-gray-500 text-xs mt-1">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
