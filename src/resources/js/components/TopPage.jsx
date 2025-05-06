import React from 'react';

const TopPage = () => {
  const getTimeBasedImage = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return 'https://i.pinimg.com/736x/ae/1d/ff/ae1dffdad0302dc8b5f06afb861ce630.jpg';
    } else if (hour >= 12 && hour < 18) {
      return 'https://i.pinimg.com/736x/76/00/0e/76000e4c83078a31defcd2ffc40fba38.jpg';
    } else {
      return 'https://o-i-shi.com/wp-content/uploads/2024/11/sozai-253.jpg';
    }
  };

  const backgroundImageUrl = getTimeBasedImage();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Focus</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <a href="/tasks" className="btn btn-primary">
              使ってみる
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;
