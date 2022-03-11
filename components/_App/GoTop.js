import React from 'react';
import { useRouter } from 'next/router';

const GoTop = ({ scrollStepInPx, delayInMs }) => {
  const [thePosition, setThePosition] =
    React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(
      onScrollStep,
      delayInMs
    );
  };

  const renderGoTopIcon = () => {
    const route = useRouter();
    if (route.asPath != '/sail-log/') {
      const newClass = 'active';
    } else {
      const newClass = '';
    }

    return (
      <div
        className={`go-top ${thePosition ? newClass : ''}`}
        onClick={scrollToTop}>
        <i className='bx bx-chevrons-up'></i>
        <i className='bx bx-chevrons-up'></i>
      </div>
    );
  };

  return (
    <React.Fragment>{renderGoTopIcon()}</React.Fragment>
  );
};

export default GoTop;
