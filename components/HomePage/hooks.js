import {useState} from 'react';

const useHooks = () => {
    const [isSelected, setIsSelected] = useState('');

  return {isSelected,
    setIsSelected
    }
}

export default useHooks