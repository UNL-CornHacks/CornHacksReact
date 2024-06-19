// import React from 'react';

// const VideoPlayer = ({ videoRef }) => {
//   return (
//     <div>
//        <video
//         ref={videoRef}
//         width="600"
//         autoPlay
//         muted
//         loop
//         playsInline
//          style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           top: '0',
//           left: '0',
//         }}
//       >
//         <source src={`${process.env.PUBLIC_URL}/output.mp4`} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

// import React from 'react';

// const VideoPlayer = ({ videoRef }) => {
//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
//       <video
//         ref={videoRef}
//         width="100%"
//         height="100%"
//         muted
//         playsInline
//         style={{
//           objectFit: 'cover',
//           top: '0',
//           left: '0',
//         }}
//       >
//         <source src={`${process.env.PUBLIC_URL}/output.mp4`} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

import React from 'react';

const VideoPlayer = ({ videoRef }) => {
  return (
      <video
        ref={videoRef}
        muted
        playinline
        style={{
          top: '0',
          left: '0',
        }}
      >
        
        Your browser does not support the video tag.
      </video>
  );
};

export default VideoPlayer;
