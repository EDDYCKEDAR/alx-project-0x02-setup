import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size, 
  shape, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-1.5 text-sm';
      case 'medium':
        return 'px-4 py-2 text-base';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case 'rounded-sm':
        return 'rounded-sm';
      case 'rounded-md':
        return 'rounded-md';
      case 'rounded-full':
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${getSizeClasses()} 
        ${getShapeClasses()} 
        bg-blue-600 hover:bg-blue-700 
        text-white font-medium 
        transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
