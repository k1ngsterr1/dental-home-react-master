/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    esmExternals: false, // Handle ES module compatibility
  },
  transpilePackages: ["mdb-react-ui-kit"], // Transpile the problematic package
  webpack: (config) => {
    // Handle ES module compatibility
    config.resolve.alias = {
      ...config.resolve.alias,
      "mdb-react-ui-kit": require.resolve("mdb-react-ui-kit"),
    };
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
