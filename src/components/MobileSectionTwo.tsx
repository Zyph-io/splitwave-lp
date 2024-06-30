import React from 'react';

const MobileSectionTwo: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/862d/8f73/30954536ab4dbf835c50812e9af7a1ee?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2jjK9wI-NcBrMyCZ2fc0O2vUyCwAH3Cc3qXzODIEwT47pYpfqr3lOF9epVtdPXpGkN4JiG9rA01GUXZpNLGwOPE99cSlZmkbyHXokr8nUAV3TkgC9emxhEI5mhobgB0iV8JJB2Jk4It1Sr7JMemdzgiNsiOyO43WQvayaqvu5YVw3L9maACj~~hzqKW-FCBKX45F5W7udt9GSuWsxPgTjHzIqXYKptiaNylZZKYKlaPqslRN5LkPwWGnENKMTVp0M7h3TRq~YevsBujWJH~FEz-Rp104DJBqvUOCs~zU7cRg9AGUdfFEuNm2abgICyzunGiIvBANqEEK210HMg~Yw__')"
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/100x100" alt="Placeholder" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/200x200" alt="Placeholder" />
        </div>
      </div>
    </section>
  );
};

export default MobileSectionTwo;
