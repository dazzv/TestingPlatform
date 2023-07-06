// module.exports = {
//     // ...
//     module: {
//       rules: [
//         // ...
//         {
//           test: /\.mp4$/,
//           exclude: /node_modules/,
//           use: [
//              {
//                loader: 'file-loader',
//                options: {
//                  name: '[name].[ext]',
//                  outputPath: 'videos/'
//                }
//              }
//           ]
//         },

//         {
//         test: /\.mp4$/,
//         use: 'file-loader'
//         },
    
//         {
//             test: /\.html$/,
//             use: 'html-loader'
//         }
//       ],
//     },
//   }