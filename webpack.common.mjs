import path from 'path';
import url from 'url';
import { merge } from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

// eslint-disable-next-line no-underscore-dangle
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules[/\\](?!react-dnd|dnd-core)/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.mjs'),
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.b64$/,
        use: 'raw-loader',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};

export const clientConfig = merge(config, {
  entry: {
    BlogPostPage: './src/pages/BlogPostPage.tsx',
    BulkUploadPage: './src/pages/BulkUploadPage.js',
    CubeSamplePackPage: './src/pages/CubeSamplePackPage.tsx',
    CubeAnalysisPage: './src/pages/CubeAnalysisPage.tsx',
    CubeBlogPage: './src/pages/CubeBlogPage.tsx',
    CubeComparePage: './src/pages/CubeComparePage.tsx',
    CubeDeckPage: './src/pages/CubeDeckPage.tsx',
    CubeDeckbuilderPage: './src/pages/CubeDeckbuilderPage.tsx',
    CubeDraftPage: './src/pages/CubeDraftPage.tsx',
    CubeListPage: './src/pages/CubeListPage.js',
    CubeHistoryPage: './src/pages/CubeHistoryPage.tsx',
    CubeOverviewPage: './src/pages/CubeOverviewPage.tsx',
    CubePlaytestPage: './src/pages/CubePlaytestPage.tsx',
    DashboardPage: './src/pages/DashboardPage.tsx',
    GridDraftPage: './src/pages/GridDraftPage.js',
    DevBlog: './src/pages/DevBlog.tsx',
    ContactPage: './src/pages/ContactPage.tsx',
    DonatePage: './src/pages/DonatePage.tsx',
    InfoPage: './src/pages/InfoPage.tsx',
    FiltersPage: './src/pages/FiltersPage.tsx',
    DownTimePage: './src/pages/DownTimePage.tsx',
    ErrorPage: './src/pages/ErrorPage.tsx',
    CardSearchPage: './src/pages/CardSearchPage.tsx',
    TopCardsPage: './src/pages/TopCardsPage.tsx',
    CardPage: './src/pages/CardPage.tsx',
    CommentPage: './src/pages/CommentPage.tsx',
    LoginPage: './src/pages/LoginPage.tsx',
    RegisterPage: './src/pages/RegisterPage.tsx',
    LostPasswordPage: './src/pages/LostPasswordPage.tsx',
    NotificationsPage: './src/pages/NotificationsPage.tsx',
    PasswordResetPage: './src/pages/PasswordResetPage.tsx',
    UserAccountPage: './src/pages/UserAccountPage.js',
    UserBlogPage: './src/pages/UserBlogPage.js',
    UserDecksPage: './src/pages/UserDecksPage.js',
    UserSocialPage: './src/pages/UserSocialPage.js',
    UserCubePage: './src/pages/UserCubePage.tsx',
    ExplorePage: './src/pages/ExplorePage.tsx',
    SearchPage: './src/pages/SearchPage.tsx',
    VersionPage: './src/pages/VersionPage.js',
    LandingPage: './src/pages/LandingPage.tsx',
    AdminDashboardPage: './src/pages/AdminDashboardPage.tsx',
    NoticePage: './src/pages/NoticePage.tsx',
    ApplicationPage: './src/pages/ApplicationPage.tsx',
    CreatorsPage: './src/pages/CreatorsPage.tsx',
    MarkdownPage: './src/pages/MarkdownPage.tsx',
    EditArticlePage: './src/pages/EditArticlePage.tsx',
    ArticlePage: './src/pages/ArticlePage.tsx',
    ReviewContentPage: './src/pages/ReviewContentPage.tsx',
    ArticlesPage: './src/pages/ArticlesPage.tsx',
    EditVideoPage: './src/pages/EditVideoPage.tsx',
    VideoPage: './src/pages/VideoPage.tsx',
    VideosPage: './src/pages/VideosPage.js',
    EditPodcastPage: './src/pages/EditPodcastPage.tsx',
    PodcastPage: './src/pages/PodcastPage.tsx',
    PodcastsPage: './src/pages/PodcastsPage.tsx',
    PodcastEpisodePage: './src/pages/PodcastEpisodePage.tsx',
    BrowseContentPage: './src/pages/BrowseContentPage.tsx',
    LeaveWarningPage: './src/pages/LeaveWarningPage.tsx',
    PackagePage: './src/pages/PackagePage.tsx',
    FeaturedCubesQueuePage: './src/pages/FeaturedCubesQueuePage.tsx',
    PackagesPage: './src/pages/PackagesPage.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});

export const serverConfig = merge(config, {
  target: 'node',
  entry: {
    'pages/DashboardPage': './src/pages/DashboardPage.tsx',
    'pages/DevBlog': './src/pages/DevBlog.tsx',
    'pages/BlogPostPage': './src/pages/BlogPostPage.tsx',
    'pages/BulkUploadPage': './src/pages/BulkUploadPage.js',
    'pages/CubeAnalysisPage': './src/pages/CubeAnalysisPage.tsx',
    'pages/CubeBlogPage': './src/pages/CubeBlogPage.tsx',
    'pages/CubeComparePage': './src/pages/CubeComparePage.tsx',
    'pages/CubeDeckPage': './src/pages/CubeDeckPage.tsx',
    'pages/CubeDeckbuilderPage': './src/pages/CubeDeckbuilderPage.tsx',
    'pages/CubeDraftPage': './src/pages/CubeDraftPage.tsx',
    'pages/CubeListPage': './src/pages/CubeListPage.js',
    'pages/CubeHistoryPage': './src/pages/CubeHistoryPage.tsx',
    'pages/CubeOverviewPage': './src/pages/CubeOverviewPage.tsx',
    'pages/CubePlaytestPage': './src/pages/CubePlaytestPage.tsx',
    'pages/CubeSamplePackPage': './src/pages/CubeSamplePackPage.tsx',
    'pages/GridDraftPage': './src/pages/GridDraftPage.js',
    'pages/ContactPage': './src/pages/ContactPage.tsx',
    'pages/InfoPage': './src/pages/InfoPage.tsx',
    'pages/DonatePage': './src/pages/DonatePage.tsx',
    'pages/DownTimePage': './src/pages/DownTimePage.tsx',
    'pages/FiltersPage': './src/pages/FiltersPage.tsx',
    'pages/ErrorPage': './src/pages/ErrorPage.tsx',
    'pages/CardSearchPage': './src/pages/CardSearchPage.tsx',
    'pages/TopCardsPage': './src/pages/TopCardsPage.tsx',
    'pages/CardPage': './src/pages/CardPage.tsx',
    'pages/CommentPage': './src/pages/CommentPage.tsx',
    'pages/LoginPage': './src/pages/LoginPage.tsx',
    'pages/RegisterPage': './src/pages/RegisterPage.tsx',
    'pages/LostPasswordPage': './src/pages/LostPasswordPage.tsx',
    'pages/NotificationsPage': './src/pages/NotificationsPage.tsx',
    'pages/PasswordResetPage': './src/pages/PasswordResetPage.tsx',
    'pages/UserAccountPage': './src/pages/UserAccountPage.js',
    'pages/UserBlogPage': './src/pages/UserBlogPage.js',
    'pages/UserDecksPage': './src/pages/UserDecksPage.js',
    'pages/UserSocialPage': './src/pages/UserSocialPage.js',
    'pages/UserCubePage': './src/pages/UserCubePage.tsx',
    'pages/ExplorePage': './src/pages/ExplorePage.tsx',
    'pages/SearchPage': './src/pages/SearchPage.tsx',
    'pages/VersionPage': './src/pages/VersionPage.js',
    'pages/LandingPage': './src/pages/LandingPage.tsx',
    'pages/AdminDashboardPage': './src/pages/AdminDashboardPage.tsx',
    'pages/NoticePage': './src/pages/NoticePage.tsx',
    'pages/ApplicationPage': './src/pages/ApplicationPage.tsx',
    'pages/CreatorsPage': './src/pages/CreatorsPage.tsx',
    'pages/MarkdownPage': './src/pages/MarkdownPage.tsx',
    'pages/ArticlePage': './src/pages/ArticlePage.tsx',
    'pages/EditArticlePage': './src/pages/EditArticlePage.tsx',
    'pages/ReviewContentPage': './src/pages/ReviewContentPage.tsx',
    'pages/ArticlesPage': './src/pages/ArticlesPage.tsx',
    'pages/VideoPage': './src/pages/VideoPage.tsx',
    'pages/EditVideoPage': './src/pages/EditVideoPage.tsx',
    'pages/VideosPage': './src/pages/VideosPage.js',
    'pages/PodcastPage': './src/pages/PodcastPage.tsx',
    'pages/EditPodcastPage': './src/pages/EditPodcastPage.tsx',
    'pages/PodcastsPage': './src/pages/PodcastsPage.tsx',
    'pages/PodcastEpisodePage': './src/pages/PodcastEpisodePage.tsx',
    'pages/BrowseContentPage': './src/pages/BrowseContentPage.tsx',
    'pages/LeaveWarningPage': './src/pages/LeaveWarningPage.tsx',
    'pages/PackagePage': './src/pages/PackagePage.tsx',
    'pages/FeaturedCubesQueuePage': './src/pages/FeaturedCubesQueuePage.tsx',
    'pages/PackagesPage': './src/pages/PackagesPage.tsx',
    'drafting/createdraft': './src/drafting/createdraft.ts',
    'drafting/draftutil': './src/drafting/draftutil.ts',
    'filtering/FilterCards': './src/filtering/FilterCards.ts',
    'utils/Card': './src/utils/Card.ts',
    'utils/Sort': './src/utils/Sort.ts',
    'utils/Util': './src/utils/Util.ts',
    'markdown/parser': './src/markdown/parser.js',
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  externals: [
    nodeExternals({
      allowlist: [],
    }),
  ],
});
