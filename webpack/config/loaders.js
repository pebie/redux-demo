/**
 * Created by bouchez on 31/07/15.
 */
import path from 'path';
import process from 'process';

module.exports = ()=> {
  return {
    getCommons: (options)=> {
      return [
        {
          test: /\.jsx?$/,
          loaders: options.hotComponents ? ['react-hot', 'babel'] : ['babel'],
          include: path.join(process.cwd(), 'src')
        }
      ];
    },

    getImages: ()=> {
      return [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ];
    },

    getStylesheets: ()=> {
      let sass = {
        test: /\.scss$/,
        loader: 'style!css!sass'
      };


      let font = [
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&minetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ];


      let html = {
        test: /\.html$/,
        loader: 'file-loader'
      };

      let less = {
        test: /\.less$/,
        loader: 'style!css!less'
      };

      let css = {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      };

      /*let sass = (options.separateStylesheet) ? separateCSS : dontSeparateCSS;*/
      /*let dontSeparateCSS = {
       test: /\.scss$/,
       include: [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'node_modules')],
       loaders: ['style', 'css', 'sass']
       };*/

      return [sass, font, html, less, css];
    }
  };
};
