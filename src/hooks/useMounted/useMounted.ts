import { useEffect, useRef } from 'react';
//useMounted used to check if current component is still mounted for setIsSubmitting(false) in onSubmit fn call to avoid setting state on an unmounted component in login & register pages
const useMounted = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted;
};

export default useMounted;
