var webpackConifg = {
  devtool: 'eval-source-map',
  output: {
    path: '/home/joma/entwicklung/nodews/advanced-vuejs-components/dist',
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: [Function]
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': '/home/joma/entwicklung/nodews/advanced-vuejs-components/src',
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.js', '.jsx', '.json', '.vue'],
    modules: ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules',
      'node_modules',
      '/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/poi/node_modules'
    ]
  },
  resolveLoader: {
    modules: ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules',
      'node_modules',
      '/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/poi/node_modules'
    ],
    symlinks: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          }
        ]
      },
      {
        test: /\.stylus$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: [
          [Function]
        ],
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.css/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          }
        ]
      },
      {
        test: /\.module\.stylus/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.styl/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.sass/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.scss/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.less/,
        use: [{
            loader: 'vue-style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        include: [
          [Function]
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/babel-preset-poi/index.js',
                {
                  jsx: 'vue'
                }
              ]
            ],
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.es6?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/babel-preset-poi/index.js',
                {
                  jsx: 'vue'
                }
              ]
            ],
            cacheDirectory: true
          }
        }]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            postcss: {
              plugins: [{
                function: "ofAPlugin",
                options: {
                  browsers: ['ie > 8', 'last 2 versions'],
                  grid: false
                },
                browsers: ['ie > 8', 'last 2 versions'],
                info: [Function],
                postcssPlugin: 'autoprefixer',
                postcssVersion: '6.0.14'
              }]
            },
            cssModules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true
            },
            loaders: {
              css: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                }
              ],
              sass: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    indentedSyntax: true,
                    sourceMap: true
                  }
                }
              ],
              scss: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
              less: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                },
                {
                  loader: 'less-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
              stylus: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
              styl: [{
                  loader: 'vue-style-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    autoprefixer: false,
                    sourceMap: true,
                    minimize: false
                  }
                },
                {
                  loader: 'stylus-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
              js: {
                loader: 'babel-loader',
                options: {
                  babelrc: false,
                  presets: [
                    ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/babel-preset-poi/index.js',
                      {
                        jsx: 'vue'
                      }
                    ]
                  ],
                  cacheDirectory: true
                }
              }
            }
          }
        }]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[hash:8].[ext]',
            limit: 10000
          }
        }]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [TimeFixPlugin {
      timefix: 11000
    },
    CaseSensitivePathsPlugin {
      options: {},
      pathCache: {},
      fsOperations: 0,
      primed: false
    },
    DefinePlugin {
      definitions: {
        'process.env.NODE_ENV': '"development"'
      }
    },
    FancyLogPlugin {
      opts: {
        mode: 'development',
        host: '0.0.0.0',
        port: 4000,
        clear: undefined,
        rawErrors: undefined
      }
    },
    CommonsChunkPlugin {
      chunkNames: ['vendor'],
      filenameTemplate: undefined,
      minChunks: [Function: minChunks],
      selectedChunks: undefined,
      children: undefined,
      deepChildren: undefined,
      async: undefined,
      minSize: undefined,
      ident: '/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0'
    },
    CommonsChunkPlugin {
      chunkNames: ['manifest'],
      filenameTemplate: undefined,
      minChunks: undefined,
      selectedChunks: undefined,
      children: undefined,
      deepChildren: undefined,
      async: undefined,
      minSize: undefined,
      ident: '/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js1'
    },
    WatchMissingNodeModulesPlugin {
      nodeModulesPath: '/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules'
    },
    HotModuleReplacementPlugin {
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    },
    NamedModulesPlugin {
      options: {}
    },
    HtmlWebpackPlugin {
      options: {
        template: './src/index.ejs',
        filename: 'index.html',
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: {
          collapseWhitespace: false,
          minifyCSS: false,
          minifyJS: false
        },
        cache: true,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],
        title: 'advanced-vuejs-components',
        xhtml: false,
        env: {
          NODE_ENV: '"development"'
        },
        pkg: {
          name: 'advanced-vuejs-components',
          version: '1.0.0',
          main: 'src/index.js',
          author: '74joma@gmail.com',
          license: 'MIT',
          scripts: {
            'build-report': 'poi build --bundle-report',
            'build-serve': 'poi build && http-server dist/'
          },
          devDependencies: {
            'babel-preset-poi': '^1.1.2',
            'http-server': '^0.10.0',
            poi: '^9.6.1',
            'poi-preset-bundle-report': '^2.0.2',
            tailwindcss: '^0.4.0',
            vue: '^2.5.11',
            'vue-loader': '^13.6.0',
            'vue-property-decorator': '^6.0.0',
            'vue-template-compiler': '^2.5.11'
          },
          dependencies: {}
        },
        description: undefined,
        course: 'Poi Lesson',
        contributors: ['Mindy', 'John', 'Jörg']
      }
    },
    PostCompile {
      fn: [Function]
    }
  ],
  performance: {
    hints: false
  },
  entry: {
    client: ['/home/joma/entwicklung/nodews/advanced-vuejs-components/node_modules/poi/app/dev-client.es6',
      '/home/joma/entwicklung/nodews/advanced-vuejs-components/src/index.js'
    ]
  }
}